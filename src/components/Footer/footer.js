const Footer = () => {
  const contactsData = [
    {
      name: "GladPharm LTD",
      address: "58 Alma-atinska str, Kiev city, Ukraine",
      contact: "+38(044)-495-82-88",
      mail: "info@kusum.ua",
    },
    {
      name: "KusumPharm LLC",
      address: "54 Skryabina str, Sumy city, Ukraine",
      contact: "+38(0542)-77-46-10",
      mail: "plant@kusum.ua",
    },
  ];

  const contacts = contactsData.map(({ name, address, contact, mail }) => {
    return (
      <div key={name} name={name}>
        {name}
        <br />
        {address}
        <br />
        {contact}
        <br />
        {mail}
        <br />
      </div>
    );
  });

  return (
    <div className="footer">
      <div className="footer-contacts">{contacts}</div>
      <div className="footer-copyrights">All rights reserved 2024 &copy;.</div>
    </div>
  );
};

export default Footer;
