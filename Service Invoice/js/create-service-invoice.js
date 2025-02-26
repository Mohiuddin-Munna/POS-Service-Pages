// Dropdown  ######

document.querySelector('.drop-btn').addEventListener('click', function() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Modal ######

document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

document.getElementById('serviceTypeForm').onsubmit = function(event) {
    event.preventDefault();
    // Perform submission actions here
    alert('Service Type Added!');
    document.getElementById('modal').style.display = 'none';
}



// Calendar Start 

class Calendar {
    constructor() {
        this.date = new Date();
        this.currentMonth = this.date.getMonth();
        this.currentYear = this.date.getFullYear();
        this.monthSelect = document.getElementById('month-select');
        this.yearSelect = document.getElementById('year-select');
        this.calendarBody = document.getElementById('calendar-body');
        this.calendarElement = document.getElementById('calendar');
        this.dateInput = document.getElementById('quotation-date');
        
        this.initializeSelectors();
        this.setupEventListeners();
        this.renderCalendar();
    }

    initializeSelectors() {
        // Setup year selector (current year ±5 years)
        const currentYear = new Date().getFullYear();
        for (let year = currentYear - 5; year <= currentYear + 5; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            this.yearSelect.appendChild(option);
        }

        this.monthSelect.value = this.currentMonth;
        this.yearSelect.value = this.currentYear;
    }

    setupEventListeners() {
        // Month/Year change handlers
        this.monthSelect.addEventListener('change', () => {
            this.currentMonth = parseInt(this.monthSelect.value);
            this.renderCalendar();
        });

        this.yearSelect.addEventListener('change', () => {
            this.currentYear = parseInt(this.yearSelect.value);
            this.renderCalendar();
        });

        // Date input click handler
        this.dateInput.addEventListener('click', () => {
            this.calendarElement.classList.add('active');
        });

        // Close calendar when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.calendarElement.contains(e.target) && 
                e.target !== this.dateInput) {
                this.calendarElement.classList.remove('active');
            }
        });
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    renderCalendar() {
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startingDay = firstDay.getDay();
        const totalDays = lastDay.getDate();
        
        let html = '';
        let date = 1;
        
        for (let i = 0; i < 6; i++) {
            html += '<tr>';
            
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDay) {
                    html += '<td></td>';
                } else if (date > totalDays) {
                    html += '<td></td>';
                } else {
                    const isToday = date === new Date().getDate() && 
                                  this.currentMonth === new Date().getMonth() && 
                                  this.currentYear === new Date().getFullYear();
                    
                    html += `<td class="${isToday ? 'current-day' : ''}" 
                               onclick="calendar.selectDate(${date})">${date}</td>`;
                    date++;
                }
            }
            
            html += '</tr>';
            if (date > totalDays) break;
        }
        
        this.calendarBody.innerHTML = html;
    }

    selectDate(day) {
        const selectedDate = new Date(this.currentYear, this.currentMonth, day);
        this.dateInput.value = this.formatDate(selectedDate);
        this.calendarElement.classList.remove('active');
    }
}

// Initialize calendar
const calendar = window.calendar = new Calendar();

// Calendar End