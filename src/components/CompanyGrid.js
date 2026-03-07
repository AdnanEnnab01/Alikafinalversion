import React from 'react';
import './CompanyGrid.css';

const CompanyGrid = () => {
  const companies = [
    { name: 'AMT', logo: process.env.PUBLIC_URL + '/AMT.jpg' },
    { name: 'AL-DORRAH', logo: process.env.PUBLIC_URL + '/AL-DORRAH.jpg' },
    { name: 'CentralCare', logo: process.env.PUBLIC_URL + '/centralcare.png' },
    { name: 'IDC', logo: process.env.PUBLIC_URL + '/IDC.jpg' },
    { name: 'GC', logo: process.env.PUBLIC_URL + '/GC.png' },
    { name: 'RK', logo: process.env.PUBLIC_URL + '/RK.jpg' },
    { name: 'GTA', logo: process.env.PUBLIC_URL + '/GTA.png' },
    { name: 'Antique', logo: process.env.PUBLIC_URL + '/antique.png' },
    { name: 'Environmental', logo: process.env.PUBLIC_URL + '/ENVIRONMENTAL.jpg' },
    { name: 'Gulf Consult', logo: process.env.PUBLIC_URL + '/GULF-CONSULT.jpg' },
    { name: 'AH Environmental', logo: process.env.PUBLIC_URL + '/AH-ENVIRONMENTAL.jpg' },
  ];

  // ترتيب هرمي مقلوب متناسق - يبدأ من 1 في الأعلى ويزيد تدريجياً
  // الشكل: 1, 2, 3, 4, 3, 2, 1 (هرم مقلوب متناسق)
  const rows = [];
  let companyIndex = 0;
  let rowNumber = 1;
  const maxLogosPerRow = 4;
  let increasing = true; // متجه للأعلى
  
  while (companyIndex < companies.length) {
    const itemsInRow = Math.min(rowNumber, maxLogosPerRow, companies.length - companyIndex);
    if (itemsInRow > 0) {
      rows.push(companies.slice(companyIndex, companyIndex + itemsInRow));
      companyIndex += itemsInRow;
      
      // زيادة أو نقصان العدد بناءً على الاتجاه
      if (increasing) {
        if (rowNumber >= maxLogosPerRow) {
          increasing = false;
          rowNumber = maxLogosPerRow - 1;
        } else {
          rowNumber++;
        }
      } else {
        if (rowNumber <= 1) {
          increasing = true;
          rowNumber = 2;
        } else {
          rowNumber--;
        }
      }
    } else {
      break;
    }
  }

  return (
    <div className="company-grid">
      {rows.map((row, rowIndex) => {
        // حساب المسافة بناءً على عدد اللوغوهات في الصف لتشكيل هرم مقلوب متناسق
        // الحساب: (4 - عدد اللوغوهات) * 85px للتمركز المثالي
        const logosCount = row.length;
        const panelWidth = 170; // عرض اللوغو
        const gap = 25; // المسافة بين اللوغوهات
        const totalRowWidth = (logosCount * panelWidth) + ((logosCount - 1) * gap);
        const maxRowWidth = (4 * panelWidth) + (3 * gap); // أقصى عرض (4 لوغوهات)
        const marginLeft = (maxRowWidth - totalRowWidth) / 2;
        
        return (
          <div 
            key={rowIndex} 
            className="grid-row"
            style={{ marginLeft: `${marginLeft}px` }}
          >
            {row.map((company, colIndex) => (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className="diamond-panel"
                style={{ animationDelay: `${(rowIndex * 0.1) + (colIndex * 0.05)}s` }}
              >
                <div className="diamond-content">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="company-logo"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CompanyGrid;
