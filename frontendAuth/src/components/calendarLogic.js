// Fungsi untuk menghasilkan kalender
export function generateCalendar(year, month) {
    const calendarElement = document.getElementById("calendar");
    const currentMonthElement = document.getElementById("currentMonth");
  
    // Create a date object for the first day of the specified month
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Clear the calendar
    calendarElement.innerHTML = "";
  
    // Set the current month text
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    currentMonthElement.innerText = `${monthNames[month]} ${year}`;
  
    // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay();
  
    // Create headers for the days of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.className = "text-center font-semibold";
      dayElement.innerText = day;
      calendarElement.appendChild(dayElement);
    });
  
    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyDayElement = document.createElement("div");
      calendarElement.appendChild(emptyDayElement);
    }
  
    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "text-center py-2 border cursor-pointer";
      dayElement.innerText = day;
  
      // Check if this date is the current date
      const currentDate = new Date();
      if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate()
      ) {
        dayElement.classList.add("bg-blue-500", "text-white"); // Add classes for the indicator
      }
  
      calendarElement.appendChild(dayElement);
    }
  }
  
  // Fungsi untuk menampilkan modal
  export function showModal(selectedDate) {
    const modal = document.getElementById("myModal");
    const modalDateElement = document.getElementById("modalDate");
    modalDateElement.innerText = selectedDate;
    modal.classList.remove("hidden");
  }
  
  // Fungsi untuk menyembunyikan modal
  export function hideModal() {
    const modal = document.getElementById("myModal");
    modal.classList.add("hidden");
  }
  