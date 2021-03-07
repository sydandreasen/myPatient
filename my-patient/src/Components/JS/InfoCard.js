import React from "react";

function InfoCard(props) {
  return (
    <div className="info-card">
      <h1
        style={{
          color: "#ffdf6c",
          fontWeight: "bold",
          marginBottom: "0",
        }}
      >
        {props.title}
      </h1>
      {props.table ? (
        <table>
          <tbody>
            {props.data.map((entry) => (
              <tr key={entry.key}>
                <td>{entry.key}</td>
                <td>{entry.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : Array.isArray(props.data) ? (
        props.data.map((entry) => <p key={entry}>{entry}</p>)
      ) : props.img ? (
        <img
          alt="results"
          src={props.data}
          style={{ width: "75%", marginBottom: "3%", borderRadius: "15%" }}
        />
      ) : (
        <p>{props.data}</p>
      )}
    </div>
  );
}
export default InfoCard;
