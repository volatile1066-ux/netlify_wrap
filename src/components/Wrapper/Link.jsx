const Link = ({ key, setUrl, link }) => {
  <div key={key}>
    <span>link</span>
    <button
      style={{ marginLeft: "10px" }}
      onClick={() => {
        setUrl(link);
      }}
    >
      Go
    </button>
  </div>;
};

export default Link;
