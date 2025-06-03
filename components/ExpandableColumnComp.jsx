//Basınca açılan
// import { useState } from "react";

// function ExpandableColumnComp({ title, color, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className={`rounded-md p-6 text-white cursor-pointer transition-all duration-300`}
//       style={{ backgroundColor: color }}
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <h3 className="text-lg font-bold mb-2">{title}</h3>
//       <p>Burada içerik olabilir.</p>

//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-40 mt-4" : "max-h-0"
//         }`}
//       >
//         <div className="text-sm text-white">
//           <p>
//             Açılan detaylı açıklama metni burada yer alır. İsterseniz her kolona farklı içerik koyabilirsiniz.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ColumnsSection() {
//   return (
//     <div className="bg-white py-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
//         <ExpandableColumnComp title="Kolon 1" color="#1D78FF">
//           {/* Extra içerik */}
//         </ExpandableColumnComp>
//         <ExpandableColumnComp title="Kolon 2" color="#00D856">
//           {/* Extra içerik */}
//         </ExpandableColumnComp>
//         <ExpandableColumnComp title="Kolon 3" color="#FA2A36">
//           {/* Extra içerik */}
//         </ExpandableColumnComp>
//       </div>
//     </div>
//   );
// }

//Mouse hover olayı ile açılan
import { useState } from "react";

function ExpandableColumnComp({ title, color }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-md p-6 text-white cursor-pointer transition-all duration-300"
      style={{ backgroundColor: color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>Burada içerik olabilir.</p>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <div className="text-sm text-white">
          <p>
            Açılan detaylı açıklama metni burada yer alır. Hover durumunda görünür.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ColumnsSection() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <ExpandableColumnComp title="Kolon 1" color="#1D78FF" />
        <ExpandableColumnComp title="Kolon 2" color="#00D856" />
        <ExpandableColumnComp title="Kolon 3" color="#FA2A36" />
      </div>
    </div>
  );
}

