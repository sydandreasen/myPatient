import React, { useEffect, useState } from "react";
import { Badge, Button } from "antd";
import "antd/dist/antd.css";
import female from "../../Images/Doc_Female.jpg";
import male from "../../Images/Doc_Male.jpg";
import logoCompact from "../../Images/Logo_Compact.png";
import InfoCard from "./InfoCard.js";

function DocPage(props) {
  const [selectedPatient, setSelectedPatient] = useState(props.doc.Patients[0]);
  const [medData, setMeds] = useState([]);

  useEffect(() => {
    let meds = selectedPatient.currentMedications;
    let tData = [];
    meds.forEach((med, index) => {
      tData.push({
        key: med,
        value: selectedPatient.currentMedicationsDosage[index],
      });
    });

    setMeds(tData);
  }, [selectedPatient]);

  useEffect(() => {
    if (selectedPatient.patientName !== props.doc.Patients[0].patientName) {
      setSelectedPatient(props.doc.Patients[0]);
    }
  }, [props.doc]);

  return (
    <div className="doc-page-grid">
      <div key="sidebar" className="sidebar">
        <div className="profile">
          <img
            src={props.doc.gender === "Male" ? male : female}
            alt="doc-profile-pic"
          />
          <h2>{props.doc.name}</h2>
          <h2>{props.doc.position}</h2>
          <h2>{props.doc.location}</h2>
          <Button
            className="dark-btn"
            type="primary"
            shape="round"
            size="large"
            onClick={() => props.logout()}
          >
            Logout
          </Button>
        </div>
        <div className="patients">
          <h1 style={{ color: "#ffdf6c", fontWeight: "bold" }}>My Patients</h1>
          <div className="patient-list">
            {props.doc.Patients.map((patient) => (
              <div key={patient.patientName}>
                <button>
                  <Badge
                    color={
                      patient.status === "critical"
                        ? "#DC291D"
                        : patient.status === "serious"
                        ? "#E4C629"
                        : "#17b91e"
                    }
                  />
                </button>
                <button
                  onClick={(e) => {
                    let subStrs = e.target.firstChild.data.split(",");
                    let nameStr = "";
                    for (let i = 0; i < subStrs.length - 1; i++) {
                      nameStr += subStrs[i];
                    }
                    setSelectedPatient(
                      props.doc.Patients.filter(
                        (patient) => patient.patientName === nameStr
                      )[0]
                    );
                  }}
                >
                  {`${patient.patientName}, ${patient.age}`}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="legend" style={{ textAlign: "left" }}>
          <div>
            <Badge color={"#17b91e"} />
            <h4>Stable</h4>
          </div>
          <div>
            <Badge color={"#E4C629"} />
            <h4>Serious</h4>
          </div>
          <div>
            <Badge color={"#DC291D"} />
            <h4>Critical</h4>
          </div>
        </div>
      </div>

      <div key="dashboard" className="dashboard">
        <div className="title">
          <h1>{`${props.doc.location}: Patient Dashboard`}</h1>
          <img alt="myPatientLogo" width={"10%"} src={logoCompact} />
        </div>

        <div className="briefing">
          <div className="left-col">
            <div>
              <Badge
                color={
                  selectedPatient.status === "critical"
                    ? "#DC291D"
                    : selectedPatient.status === "serious"
                    ? "#E4C629"
                    : "#17b91e"
                }
              />
              <h1 style={{ fontWeight: "bold" }}>
                {`${selectedPatient.patientName}, ${selectedPatient.age}`}
              </h1>
            </div>
            <div>
              <Badge color="rgba(255,255,255,0)" />
              <h1 style={{ fontWeight: "bold" }}>
                {`Patient ID: ${selectedPatient.patientID}`}
              </h1>
            </div>
          </div>

          <div>
            <Button
              className="yellow-btn"
              type="primary"
              size="large"
              shape="round"
              onClick={() => props.remove(selectedPatient)}
            >
              Discharge Patient
            </Button>
            <Button
              className="dark-btn"
              type="primary"
              size="large"
              shape="round"
              onClick={() => props.remove(selectedPatient)}
            >
              Pronounce Deceased
            </Button>
          </div>
          <div className="right">
            <h2>{`Date of Admission: ${selectedPatient.dateOfAdmission}`}</h2>
            <h2>{`Reason: ${selectedPatient.reasonForAdmission}`}</h2>
            <h2>{`Emergency Contact: ${selectedPatient.emergencyContact}`}</h2>
          </div>
        </div>

        <div className="metrics">
          <div className="left">
            <div className="about">
              <InfoCard
                title="About"
                table={true}
                data={[
                  { key: "Date of Birth", value: selectedPatient.patientDOB },
                  {
                    key: "Height",
                    value: selectedPatient.height,
                  },
                  {
                    key: "Weight",
                    value: selectedPatient.weight,
                  },
                  {
                    key: "Body Fat %",
                    value: selectedPatient.bodyFatPercentage,
                  },
                ]}
              />
            </div>
            <div className="results">
              <InfoCard
                title="Results of Testing"
                table={false}
                img={true}
                data={selectedPatient.scanURL}
              />
            </div>
          </div>

          <div className="middle">
            <div className="vitals">
              <InfoCard
                title="Vitals"
                table={true}
                data={[
                  {
                    key: "Heart Rate",
                    value: selectedPatient.heartRate,
                  },
                  {
                    key: "Respiratory Rate",
                    value: selectedPatient.respiratoryRate,
                  },
                  {
                    key: "Blood Pressure",
                    value: selectedPatient.bloodPressure,
                  },
                  {
                    key: "Temperature",
                    value: selectedPatient.temperature,
                  },
                ]}
              />
            </div>

            <div className="diagnosis">
              <InfoCard
                title="My Diagnosis"
                table={false}
                data={selectedPatient.doctorDiagnosis}
              />
            </div>
          </div>

          <div className="right">
            <div className="medications">
              <InfoCard
                title="Current Medications"
                table={true}
                data={medData}
              />
            </div>
            <div className="allergies">
              <InfoCard
                title="Allergies"
                table={false}
                data={selectedPatient.allergies}
              />
            </div>
            <div className="history">
              <InfoCard
                title="Past Medical History"
                table={false}
                data={selectedPatient.pastMedicalHistory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DocPage;
