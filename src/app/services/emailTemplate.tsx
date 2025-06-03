interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  details: string;
}

export function EmailTemplate({
  name,
  email,
  phone,
  service,
  timeline,
  details,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0F0F0F",
        color: "#FFFFFF",
        padding: "30px",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* LOGO / HEADER */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h1 style={{ color: "#F97316", fontSize: "28px", margin: 0 }}>
          Daniel Pedro
        </h1>
        <p style={{ color: "#9CA3AF", margin: 0, fontSize: "0.95rem" }}>
          Desenvolvedor Full Stack
        </p>
      </div>

      {/* TÍTULO */}
      <h2
        style={{
          color: "#F97316",
          fontSize: "22px",
          marginBottom: "20px",
        }}
      >
        🚀 Novo contato via portifólio
      </h2>

      <p style={{ color: "#D1D5DB", marginBottom: "24px" }}>
        Você recebeu uma nova mensagem com os seguintes dados:
      </p>

      {/* TABELA DE DADOS */}
      <table
        cellPadding={10}
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#1F2937",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <tbody>
          <tr>
            <td style={{ color: "#F97316", fontWeight: "bold" }}>Nome:</td>
            <td style={{ color: "#E5E7EB" }}>{name}</td>
          </tr>
          <tr>
            <td style={{ color: "#F97316", fontWeight: "bold" }}>Email:</td>
            <td style={{ color: "#E5E7EB" }}>{email}</td>
          </tr>
          <tr>
            <td style={{ color: "#F97316", fontWeight: "bold" }}>Telefone:</td>
            <td style={{ color: "#E5E7EB" }}>{phone}</td>
          </tr>
          <tr>
            <td style={{ color: "#F97316", fontWeight: "bold" }}>Serviço:</td>
            <td style={{ color: "#E5E7EB" }}>{service}</td>
          </tr>
          <tr>
            <td style={{ color: "#F97316", fontWeight: "bold" }}>
              Prazo estimado:
            </td>
            <td style={{ color: "#E5E7EB" }}>{timeline}</td>
          </tr>
          <tr>
            <td style={{ color: "#F97316", fontWeight: "bold" }}>
              Detalhes do projeto:
            </td>
            <td style={{ color: "#E5E7EB" }}>{details}</td>
          </tr>
        </tbody>
      </table>

      <p
        style={{
          marginTop: "30px",
          color: "#60A5FA",
        }}
      >
        📩 Responda esse contato diretamente para <strong>{email}</strong>.
      </p>

      {/* DIVISÓRIA */}
      <hr
        style={{
          margin: "30px 0",
          border: "none",
          borderTop: "1px solid #374151",
        }}
      />

      {/* RODAPÉ / ASSINATURA */}
      <footer style={{ textAlign: "center", color: "#9CA3AF", fontSize: "0.85rem" }}>
        <p style={{ margin: "0 0 8px 0" }}>
          Este e-mail foi enviado automaticamente via formulário do portfólio.
        </p>
        <p style={{ margin: "0 0 16px 0" }}>
          Desenvolvido com ❤️ por <strong>Daniel Pedro</strong>.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          <a
            href="https://github.com/danielpedroo"
            style={{ color: "#60A5FA", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/danielpedroo"
            style={{ color: "#60A5FA", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
