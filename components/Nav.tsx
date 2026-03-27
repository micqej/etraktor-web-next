import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{
      background: "white",
      borderBottom: "2px solid #2d7a3a",
      padding: "0 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "70px",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
        <img src="/logo.png" alt="etraktor.sk" style={{ height: "50px", width: "auto" }} />
        <span>etraktor.sk</span>
      </Link>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link href="/">Domov</Link>
        <Link href="/palety">Transportné palety</Link>
        <Link href="/zariadenia">Jednoúčelové zariadenia</Link>
        <Link href="/vyroba">Výroba</Link>
        <Link href="/etraktor">eTRAKTOR</Link>
        <Link href="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}