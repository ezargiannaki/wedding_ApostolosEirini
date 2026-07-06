function updateCountdown(){
  const box = document.querySelector('.countdown');
  const target = new Date(box.dataset.date).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = d;
  document.getElementById('hours').textContent = h;
  document.getElementById('minutes').textContent = m;
  document.getElementById('seconds').textContent = s;
}
function copyIban(){
  const iban = document.getElementById('iban').textContent;
  navigator.clipboard.writeText(iban);
  alert('Το IBAN αντιγράφηκε!');
}
updateCountdown();
setInterval(updateCountdown,1000); 

<script>
  const peopleData = {
    groom: {
      name: "Απόστολος",
      image: "images/groom.jpg"
    },
    bride: {
      name: "Ειρήνη",
      image: "images/bride.jpg"
    },
    koumparos1: {
      name: "Όνομα Κουμπάρου",
      image: "images/koumparos.jpg"
    },
    koumpara1: {
      name: "Όνομα Κουμπάρας",
      image: "images/koumpara.jpg"
    }
  };

  function openPersonModal(person) {
    document.getElementById("personImage").src = peopleData[person].image;
    document.getElementById("personName").textContent = peopleData[person].name;
    document.getElementById("personModal").classList.add("active");
  }

  function closePersonModal() {
    document.getElementById("personModal").classList.remove("active");
  }

  document.getElementById("personModal").addEventListener("click", function(e) {
    if (e.target === this) {
      closePersonModal();
    }
  });
</script>
