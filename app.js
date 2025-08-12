document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => initCalendar())
    .catch(err => alert(err.message));
});

document.getElementById("register-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => alert("Compte créé"))
    .catch(err => alert(err.message));
});

function initCalendar() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("calendar").style.display = "block";

  const calendar = new FullCalendar.Calendar(document.getElementById("calendar"), {
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    events: async (fetchInfo, successCallback) => {
      const snapshot = await db.collection("events").get();
      const events = snapshot.docs.map(doc => doc.data());
      successCallback(events);
    },
    select: async (info) => {
      const title = prompt("Nom de l'événement :");
      if (title) {
        const event = {
          title: title,
          start: info.startStr,
          end: info.endStr
        };
        await db.collection("events").add(event);
        calendar.refetchEvents();
      }
    }
  });

  calendar.render();
}
