import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./constants";

const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "LGBTQIAPN+",
    "saúde",
    "inclusão",
    "profissionais de saúde",
    "cuidado seguro",
    "Lacrei Saúde",
    "telemedicina",
    "atendimento médico",
    "diversidade",
    "equidade em saúde",
    "comunidade LGBTQIAPN+",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  robots: "index, follow",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image-1200x630.png`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
};

export default metadata;