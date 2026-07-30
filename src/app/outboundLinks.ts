import outboundLinksYaml from "../content/outbound-links.yaml?raw";

export type OutboundLinkKey =
  | "sftGrpoRepo"
  | "pfasAriaRepo"
  | "contactEmail"
  | "contactLinkedin"
  | "contactGithub"
  | "contactScholar"
  | "theaterVideo";

const parseOutboundLinks = (yaml: string): Record<OutboundLinkKey, string> => {
  const links: Record<OutboundLinkKey, string> = {
    sftGrpoRepo: "#",
    pfasAriaRepo: "#",
    contactEmail: "#",
    contactLinkedin: "#",
    contactGithub: "#",
    contactScholar: "#",
    theaterVideo: "#",
  };

  yaml.split("\n").forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const match = trimmed.match(/^([a-zA-Z]+):\s*(.*)$/);

    if (!match) {
      return;
    }

    const key = match[1] as OutboundLinkKey;
    const value = match[2].trim().replace(/^["']|["']$/g, "");

    if (value && key in links) {
      links[key] = value;
    }
  });

  return links;
};

export const outboundLinks = parseOutboundLinks(outboundLinksYaml);
