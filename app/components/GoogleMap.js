export default function GoogleMap() {
  return (
    <div className="w-full p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.7308308170795!2d44.49178031534952!3d40.21505007938919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd56fdc5cbf3%3A0xf964b1bd1e442109!2sOdalen!5e0!3m2!1sen!2s!4v1642351675472!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d392.1599680650498!2d44.52104644348628!3d40.18753669150925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1648467893702!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0, marginTop: "1rem" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
