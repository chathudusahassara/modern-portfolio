// import Image from "next/image";
// import Link from "next/link";

// import Socials from "../components/Socials";

// const Header = () => {
//   return (
//     <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
//           {/* logo */}
//           <Link href="/">
//             <Image
//               src="/logo.svg"
//               alt="logo"
//               width={220}
//               height={48}
//               priority
//             />
//           </Link>

//           {/* socials */}
//           <Socials />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <h1
              style={{
                fontSize: "36px",         // change font size here
                letterSpacing: "1px",     // spacing between letters
                display: "flex",          // align text horizontally
                gap: "8px",               // gap between words
                alignItems: "center",
              }}
            >
              <b style={{ marginRight: "5px" }}>Chathudu</b> Sahassara
            </h1>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
