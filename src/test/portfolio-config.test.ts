import { describe, expect, it } from "vitest";
import { packages, processTiming, WHATSAPP_URL } from "@/lib/portfolio-config";

function packageNamed(name: string) {
  const found = packages.find(pack => pack.name === name);
  if (!found) throw new Error(`Pacote "${name}" não encontrado na configuração.`);
  return found;
}

const essencial = packageNamed("Essencial");
const institucional = packageNamed("Institucional");
const cuidadoMensal = packageNamed("Cuidado mensal");

describe("Portfolio service commitments", () => {
  it("uses the exact provided WhatsApp number and message", () => {
    const url = new URL(WHATSAPP_URL);
    expect(url.pathname).toBe("/5511945343249");
    expect(url.searchParams.get("text")).toBe("Olá, Yasmin! Vi o seu portfólio e quero conversar sobre um site.");
  });
  it("limits Essencial to one page and five sections", () => {
    expect(essencial.pages).toBe(1);
    expect(essencial.maxSections).toBe(5);
  });
  it("includes two revision rounds", () => {
    expect(essencial.revisions).toBe(2);
    expect(institucional.revisions).toBe(2);
    expect(processTiming.revisions).toBe(2);
  });
  it("sets Essencial delivery at about seven business days", () => { expect(essencial.days).toEqual([7, 7]); });
  it("limits Institucional to three pages", () => { expect(institucional.pages).toBe(3); });
  it("sets Institucional delivery at twelve to fifteen business days", () => { expect(institucional.days).toEqual([12, 15]); });
  it("offers one monthly site check", () => { expect(cuidadoMensal.frequency).toBe("monthly"); });
  it("sets the initial conversation to forty minutes", () => { expect(processTiming.conversationMinutes).toBe(40); });
  it("sends the proposal on the same day", () => { expect(processTiming.proposalSameDay).toBe(true); });
  it("sets the publication call to twenty minutes", () => { expect(processTiming.publicationMinutes).toBe(20); });
});
