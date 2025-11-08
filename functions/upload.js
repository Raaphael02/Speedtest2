export async function handler(event, context) {
  // Größe der hochgeladenen Datei in Bytes
  const size = event.body ? event.body.length : 0;
  return {
    statusCode: 200,
    body: JSON.stringify({ bytes: size })
  };
}
