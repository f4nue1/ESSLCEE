
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resultForm');
  const reg = document.getElementById('reg');
  const fname = document.getElementById('fname');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const regVal = reg.value.trim();
    const nameVal = fname.value.trim();

    if (!regVal || !nameVal) {
      alert('Please fill both fields.');
      return;
    }

    
    const normalizedName = nameVal.toLowerCase();
    const normalizedReg = regVal;

    
    if (normalizedReg === "8024102" && normalizedName === "abdul ahmed mustafa") {
      window.location.href = "welcome.html";
    } else {
      alert("Invalid registration number or name.");
    }
  });
});