import { Inter, Lora, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
const ibmFlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });
const hexaframe = localFont({
  src: "../../public/assets/fonts/HexaframeCF-Bold.woff2",
});

export { ibmFlexMono, hexaframe };
