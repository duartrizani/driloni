// src/components/ProductsSummary.jsx
import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from 'jspdf';


const ProductsSummary = ({ offerDetails, selectedProducts }) => {
    const generateExcel = () => {
        const wb = XLSX.utils.book_new();
        const wsData = [
          ["Offer Made By", offerDetails.offerMadeBy],
          ["Offer For", offerDetails.offerFor],
          ["Address", offerDetails.address],
          ["Email", offerDetails.email],
          [],
          ["Emri Produktit", "Njesia", "Sasia"]
        ];
      
        selectedProducts.forEach((product) => {
          wsData.push([
            product.productName,
            product.njesia,
            product.amount
          ]);
        });
      
        const ws = XLSX.utils.aoa_to_sheet(wsData);
      
        // Adjust column widths based on content
        const columnWidths = wsData.reduce((acc, row) => {
          row.forEach((cell, colIndex) => {
            acc[colIndex] = Math.max(acc[colIndex] || 0, String(cell).length);
          });
          return acc;
        }, []);
      
        ws['!cols'] = columnWidths.map((width) => ({ wch: width }));
      
        XLSX.utils.book_append_sheet(wb, ws, "Offer Details");
      
        const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
        const buf = new ArrayBuffer(wbout.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < wbout.length; ++i) view[i] = wbout.charCodeAt(i) & 0xff;
        saveAs(new Blob([buf], { type: "application/octet-stream" }), "offer_details.xlsx");
      };


      

      const generatePDF = () => {
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: [210, 297] }); // Set A4 portrait
        const margin = 10; // Adjust margins for better layout
        const imageWidth = 10; // Adjust image width (consider aspect ratio for non-square images)
        const imageHeight = 15; // Adjust image height (consider aspect ratio for non-square images)
        const fontSize = 8; // Set font size for better fit
        const columnWidth1 = 30; // Adjust width for Foto and Emri Produktit columns
        const columnWidth2 = (doc.internal.pageSize.width - margin * 2 - imageWidth - columnWidth1) / 2; // Calculate remaining width for Njesia and Sasia
    
        // Set document font size
        doc.setFontSize(fontSize);
    
        // Add offer details with styling
        doc.text(`Offer Made By: ${offerDetails.offerMadeBy}`, margin, margin);
        // ... add other offer details text with styling
    
        // Add a line break
        doc.text("", margin, margin + 5);
    
        // Add product table header with styling
        const tableHeaderY = margin + 10;
        doc.text("Foto", margin, tableHeaderY);
        doc.text("Emri Produktit", margin + columnWidth1, tableHeaderY);
        doc.text("Njesia", margin + columnWidth1 + columnWidth2, tableHeaderY);
        doc.text("Sasia", margin + columnWidth1 + columnWidth2 * 2, tableHeaderY);
    
        // Loop through products and add data with images
        let y = tableHeaderY + imageHeight + 5; // Starting position for product details
        let itemsPerPage = 15; // Adjust items per page (considering portrait layout)
        let pageCount = 1;
    
        selectedProducts.forEach((product, index) => {
          const imgData = product.productImage; // Assuming you have an image data URL
          const imageAspectRatio = product.imageAspectRatio || 1; // Assuming you have an aspect ratio for the image (optional)
    
          // Calculate image dimensions that fit within the designated width and height while maintaining aspect ratio
          const adjustedImageWidth = Math.min(imageWidth, imageAspectRatio * imageHeight);
          const adjustedImageHeight = Math.min(imageHeight, imageWidth / imageAspectRatio);
    
          // Add product image
          doc.addImage(imgData, 'JPEG', margin, y, adjustedImageWidth, adjustedImageHeight);
    
          // Add product details text with styling and alignment
          doc.text(product.productName.slice(0, 20), margin + imageWidth + 5, y + 2); // Limit name length and adjust y position
          doc.text(product.njesia.toString(), margin + columnWidth1 + columnWidth2, y + 2);
          doc.text(Number(product.amount).toString(), margin + columnWidth1 + columnWidth2 * 2, y + 2); // Parse as number
    
          // Check for page limit and add new page if needed
          if (index >= itemsPerPage * pageCount) {
            y = tableHeaderY + imageHeight + 5; // Reset y position for new page
            pageCount++;
    
            // Add page number in footer
            const footerText = `Page ${pageCount} / ${Math.ceil(selectedProducts.length / itemsPerPage)}`;
            const footerMargin = doc.internal.pageSize.height - margin;
            doc.text(footerText, margin, footerMargin);
    
            // Move table headers to the top of the new page
            doc.text("Foto", margin, tableHeaderY);
            doc.text("Emri Produktit", margin + columnWidth1, tableHeaderY);
            doc.text("Njesia", margin + columnWidth1 + columnWidth2, tableHeaderY);
            doc.text("Sasia", margin + columnWidth1 + columnWidth2 * 2, tableHeaderY);
          }
    
          y += imageHeight + 5; // Adjust y position for next product
        });
    
        // Save the PDF document with a descriptive filename
        doc.save(`Offer Details - ${offerDetails.offerMadeBy}.pdf`);
      };

      



    
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Offer Summary</h2>
      <div className="mb-8">
        <p className="mb-2"><span className="font-semibold">Offer Made By:</span> {offerDetails.offerMadeBy}</p>
        <p className="mb-2"><span className="font-semibold">Offer For:</span> {offerDetails.offerFor}</p>
        <p className="mb-2"><span className="font-semibold">Address:</span> {offerDetails.address}</p>
        <p className="mb-2"><span className="font-semibold">Email:</span> {offerDetails.email}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {selectedProducts.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={product.productImage} alt={product.productName} className="w-32 h-32 object-cover mb-2" />
            <div className="text-center">
              <p className="font-semibold mb-1">{product.productName}</p>
              <p className="text-gray-600">{product.njesia} {product.amount}</p>      
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={generateExcel}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Generate Excel
        </button>
        <button onClick={generatePDF} className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-700">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ProductsSummary;
