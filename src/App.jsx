import { useEffect } from "react";
import { useState, useRef } from "react";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 101,
      name: "Peter",
      age: 20,
      active: true,
    },
    {
      id: 102,
      name: "Tony",
      age: 34,
      active: true,
    },
    {
      id: 103,
      name: "Thor",
      age: 20,
      active: true,
    },
    {
      id: 104,
      name: "Steve",
      age: 20,
      active: true,
    },
    {
      id: 105,
      name: "Banner",
      age: 20,
      active: true,
    },
  ]);

  const [team, setTeam] = useState([]);
  const [avgAge, setAvgAge] = useState(0);

  const addEmployee = (e) => {
    console.log();
    const empId = e.target.previousSibling.value;

    let addToTeam = employees.find((item) => item.id == empId);

    setEmployees((prevData) =>
      prevData.map((item) =>
        item.id == empId ? { ...item, active: false } : item
      )
    );

    setTeam([...team, addToTeam]);
  };

  const removeFromTeam = (e) => {
    const empId = e.target.previousSibling.value;

    const updatedData = team.filter((item) => item.id != empId);
    setTeam(updatedData);

    setEmployees((prevData) =>
      prevData.map((item) =>
        item.id == empId ? { ...item, active: true } : item
      )
    );
  };

  useEffect(() => {
    const totalAge = team.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / team.length;

    setAvgAge(averageAge);
  }, [team, employees]);

  return (
    <>
      <div className="conatiner">
        <div className="card">
          <h3 className="title">Employees</h3>

          {employees.map((employee, idx) => {
            return (
              <div className="employee-details" key={idx}>
                <p className="name">{employee.name}</p>
                <p className="age">{employee.age}</p>
                <input type="hidden" name="" value={employee.id} />
                {employee.active ? (
                  <button className="add" onClick={addEmployee}>
                    Add
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {/*  */}
        <div className="card">
          <h3 className="title">Team</h3>
          {team.map((data, idx) => {
            return (
              <div className="employee-details" key={idx}>
                <p className="name">{data.name}</p>
                <p className="age">{data.age}</p>
                <input type="hidden" name="" value={data.id} />
                <button className="add" onClick={removeFromTeam}>
                  Remove
                </button>
              </div>
            );
          })}

          <div className="employee-details">
            <p className="name"> Average Age</p>

            {avgAge > 0 ? <p className="age">{avgAge}</p> : ""}
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default App;
