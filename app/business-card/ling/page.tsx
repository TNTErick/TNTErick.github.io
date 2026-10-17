"use client";

import Image from "next/image";
import s from "./page.module.css";

const card = {
  name: "LIM Chunki",
  title: "Master's Student",
  university: "Graduate Institute of Linguistics, National Taiwan University",
  universityLogo: "https://www.ntu.edu.tw/images/resized/cis_mark-295w.jpeg",
  lab: "Lab of Ontologies, Language Processing & E-Humanities",
  labLogo: "",
  phone: "+886 9 8838 2634",
  email: "r14142001@ntu.edu.tw",
  website: "tnterick.github.io/",
  linkedin: "www.linkedin.com/in/chun-chi-lin-9a3b4a270/",
  github: "github.com/TNTErik",
  location: "Taipei, Taiwan",
  interests: ["Diachronic Semantics", "Sign Language Recognition", "Historical Linguistics"],
};

const icons: Record<string, string> = {
  phone: "📞", email: "✉️", website: "🌐",
  linkedin: "💼", github: "🐙", location: "📍",
};

const linkFields = new Set(["website", "linkedin", "github", "email", "phone"]);

function getHref(key: string, value: string) {
  if (key === "email") return `mailto:${value}`;
  if (key === "phone") return `tel:${value.replace(/\s/g, "")}`;
  return value.startsWith("http") ? value : `https://${value}`;
}

function downloadVCard() {
  const lines = [
    "BEGIN:VCARD", "VERSION:3.0",
    `FN:${card.name}`,
    card.title ? `TITLE:${card.title}` : "",
    card.university
      ? `ORG:${card.lab ? card.lab + ";" : ""}${card.university}`
      : "",
    card.phone ? `TEL:${card.phone}` : "",
    card.email ? `EMAIL:${card.email}` : "",
    card.website
      ? `URL:${card.website.startsWith("http") ? card.website : "https://" + card.website}`
      : "",
    card.location ? `ADR:;;${card.location};;;;` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const a = document.createElement("a");
  a.href = "data:text/vcard;charset=utf-8," + encodeURIComponent(lines);
  a.download = card.name.replace(/\s+/g, "_") + ".vcf";
  a.click();
}

const uniFallback = card.university
  ? card.university.split(" ").map((w) => w[0]).join("").slice(0, 4)
  : "U";
const labFallback = card.lab
  ? card.lab.split(" ").map((w) => w[0]).join("").slice(0, 4)
  : "L";

export default function BusinessCardLing() {
  return (
    <div className={s.body}>
      <div className={s.card}>
        <div className={s.name}>{card.name}</div>
        <div className={s.title}>{card.title}</div>

        {card.university && (
          <div className={s.affiliation}>
            <div className={s.uniText}>
              <span className={s.uniName}>{card.university}</span>
              {card.lab && <span className={s.labName}>{card.lab}</span>}
            </div>
            {card.lab && (
              card.labLogo ? (
                <Image
                  className={s.labLogo}
                  src={card.labLogo}
                  alt={card.lab}
                  width={32}
                  height={32}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <div className={s.labLogoFallback}>{labFallback}</div>
              )
            )}
            {card.universityLogo ? (
              <Image
                className={s.uniLogo}
                src={card.universityLogo}
                alt={card.university}
                width={32}
                height={32}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className={s.uniLogoFallback}>{uniFallback}</div>
            )}
          </div>
        )}

        <hr className={s.divider} />

        <div className={s.info}>
          {(["phone", "email", "website", "linkedin", "github", "location"] as const).map(
            (key) => {
              const value = card[key];
              if (!value) return null;
              return (
                <div key={key} className={s.row}>
                  <span className={s.icon}>{icons[key]}</span>
                  {linkFields.has(key) ? (
                    <a href={getHref(key, value)} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              );
            }
          )}
        </div>

        {card.interests.length > 0 && (
          <>
            <div className={s.interestsLabel}>Research Interests</div>
            <div className={s.interests}>
              {card.interests.map((i) => (
                <span key={i} className={s.tag}>{i}</span>
              ))}
            </div>
          </>
        )}

        <button className={s.saveBtn} onClick={downloadVCard}>
          ⬇ Save Contact (.vcf)
        </button>
      </div>
    </div>
  );
}
