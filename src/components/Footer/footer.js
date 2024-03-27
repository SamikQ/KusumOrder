import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      fontSize: "50",
      position: "fixed",
      bottom: "0",
      width: "100%",
      textAlign: "center",
      marginTop: "auto",
    },
    contacts: {
      display: "flex",
      justifycontent: "space-around",
      marginBotton: 0,
    },
  };
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

  var footerElement = (
    <footer style={styles.footer}>
      <div style={styles.contacts}>{contacts}</div>
      <div className="footer-copyrights">All rights reserved 2024 &copy;.</div>
    </footer>
  );

  return <>{footerElement}</>;
};

export default Footer;
