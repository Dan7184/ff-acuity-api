export default async function handler(req, res) {
  try {
    const response = await fetch("https://acuityscheduling.com/api/v1/availability/classes", {
      headers: {
        "Authorization": "Basic " + Buffer.from("36421643:23195169e787e0737880cb2f9882993f").toString("base64")
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}
