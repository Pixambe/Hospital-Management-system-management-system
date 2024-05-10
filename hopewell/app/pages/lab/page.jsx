import DashboardLayout from "../DashboardLayout";

export default function Lab() {
  return (
    <div>
      <DashboardLayout
        head="Dashboard - Lab"
        recent="Lab requests"
        tableData={
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
          </tr>
        }
      ></DashboardLayout>
    </div>
  );
}
