import Chart from "chart.js/auto";

(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  // Function to get responsive font sizes based on screen width
  function getResponsiveFontSize() {
    const width = window.innerWidth;
    if (width < 480) return 8;  // xs
    if (width < 768) return 14;  // sm
    if (width < 1024) return 16; // md
    if (width < 1280) return 18; // lg
    if (width < 1536) return 20; // xl
    if (width < 2200) return 28; // 2xl
    if (width < 2800) return 30; // 3xl
    if (width < 3200) return 32; // 4xl
    return 50;                   // uw
  }

  const fontSize = getResponsiveFontSize();

  new Chart(document.getElementById("graphCanvas"), {
    type: "line",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Transactions",
          data: data.map((row) => row.count),
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            font: {
              size: fontSize,
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: fontSize,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: fontSize + 2, // Slightly larger font for the legend
            },
          },
        },
      },
    },
  });
})();

const data1 = {
  firstName: "John",
  lastName: "Doe",
  username: "john.doe456",
  password: "1234",

  accounts: [
    {
      accountNumber: 562012,
      accountBalance: "20$",
      cardDetails: {
        cardNumber: "5500 1111 2222 3333",
        expiryDate: "11/25",
        pin: "7384",
        cvv: "456",
      },
    },
    {
      accountNumber: 967291,
      accountBalance: "240$",
      cardDetails: {
        cardNumber: "6011 0000 4444 5555",
        expiryDate: "08/27",
        pin: "1597",
        cvv: "789",
      },
    },
    {
      accountNumber: 123122,
      accountBalance: "740$",
      cardDetails: {
        cardNumber: "4532 1234 5678 9012",
        expiryDate: "04/26",
        pin: "4821",
        cvv: "123",
      },
    },
    {
      accountNumber: 862992,
      accountBalance: "6240$",
      cardDetails: {
        cardNumber: "3700 0000 6666 7777",
        expiryDate: "02/28",
        pin: "3265",
        cvv: "321",
      },
    },
  ],

  beneficiaries: [
    {
      name: "Emily Johnson",
      accountNumber: "123456",
      username: "emily.johnson123",
      timestamp: "June 1, 2023, 01:55 PM"
    },
    {
      name: "Michael Smith",
      accountNumber: "654321",
      username: "michael.smith456",
      timestamp: "June 22, 2023, 10:10 AM"
    },
    {
      name: "Sarah Williams",
      accountNumber: "789123",
      username: "sarah.williams789",
      timestamp: "May 26, 2023, 08:05 AM"
    },
  ],

  transactionHistory: [
    {
      accountNumber: 123122,
      transaction: "340$",
      type: "credit",
      timestamp: "2024-05-01 04:30 PM",
      fromTo: "Michael Smith",
    },
    {
      accountNumber: 123122,
      transaction: "-200$",
      type: "debit",
      timestamp: "2024-03-15 11:45 AM",
      fromTo: "Emily Johnson",
    },
    {
      accountNumber: 123122,
      transaction: "600$",
      type: "credit",
      timestamp: "2024-02-20 08:15 PM",
      fromTo: "Self",
    },
    {
      accountNumber: 562012,
      transaction: "-340$",
      type: "debit",
      timestamp: "2023-12-10 09:00 AM",
      fromTo: "Sarah Williams",
    },
    {
      accountNumber: 562012,
      transaction: "360$",
      type: "credit",
      timestamp: "2023-11-22 06:25 PM",
      fromTo: "Self",
    },
    {
      accountNumber: 862992,
      transaction: "1350$",
      type: "credit",
      timestamp: "2023-10-30 02:50 PM",
      fromTo: "Sarah Williams",
    },
    {
      accountNumber: 862992,
      transaction: "950$",
      type: "credit",
      timestamp: "2023-09-18 07:35 AM",
      fromTo: "Sarah Williams",
    },
    {
      accountNumber: 862992,
      transaction: "2800$",
      type: "loan",
      timestamp: "2023-08-05 03:20 PM",
      fromTo: "Self",
    },
    {
      accountNumber: 862992,
      transaction: "2140$",
      type: "credit",
      timestamp: "2023-07-14 05:45 PM",
      fromTo: "Self",
    },
    {
      accountNumber: 862992,
      transaction: "-500$",
      type: "debit",
      timestamp: "2023-07-01 02:45 PM",
      fromTo: "Bank",
    },
    {
      accountNumber: 862992,
      transaction: "-500$",
      type: "debit",
      timestamp: "2023-06-24 05:45 PM",
      fromTo: "Bank",
    },
    {
      accountNumber: 967291,
      transaction: "-120$",
      type: "debit",
      timestamp: "2023-06-22 10:10 AM",
      fromTo: "Emily Johnson",
    },
    {
      accountNumber: 967291,
      transaction: "-120$",
      type: "debit",
      timestamp: "2023-06-01 01:55 PM",
      fromTo: "Emily Johnson",
    },
    {
      accountNumber: 967291,
      transaction: "480$",
      type: "credit",
      timestamp: "2023-05-26 08:05 AM",
      fromTo: "Self",
    },
  ],
  loans: [
    {
      initialAmount: "2800$",
      approvalTimestamp: "2023-08-05 03:20 PM",
      approvedToAccountNumber: 862992,
      loanTerm: {
        duration: 3,
        unit: "years",
      },
      interest: "15%",
      repayableAmount: "4060$",
      paymentHistory: [
        {
          accountNumber: 862992,
          transaction: "500$",
          timestamp: "2023-07-01 02:45 PM",
        },
        {
          accountNumber: 862992,
          transaction: "500$",
          timestamp: "2023-06-24 05:45 PM",
        },
      ],
      balance: "3060$",
    },
  ],
  notifications: [
    "May 26, 2023, 08:05 AM: 480$ was self deposited",
    "May 26, 2023, 08:05 AM: Sarah Williams was added to beneficiaries",
    "June 1, 2023, 01:55 PM: Emily Johnson was added to beneficiaries",
    "June 1, 2023, 01:55 PM: 120$ was transferred from Emily Johnson to John Doe",
    "June 22, 2023, 10:10 AM: Michael Smith was added to beneficiaries",
    "June 24, 2023, 05:45 PM: 500$ was transferred from Bank to John Doe",
    "July 1, 2023, 02:45 PM: 500$ was transferred from Bank to John Doe",
    "July 14, 2023, 05:45 PM: 2140$ was self deposited",
    "August 5, 2023, 03:20 PM: 2800$ loan was sanctioned",
    "September 18, 2023, 07:35 AM: 950$ was received from Sarah Williams",
    "October 30, 2023, 02:50 PM: 1350$ was received from Sarah Williams",
    "November 22, 2023, 06:25 PM: 360$ was self deposited",
    "December 10, 2023, 09:00 AM: 340$ was transferred to Sarah Williams",
    "February 20, 2024, 08:15 PM: 600$ was self deposited",
    "March 15, 2024, 11:45 AM: 200$ was transferred from Emily Johnson to John Doe",
    "May 1, 2024, 04:30 PM: 340$ was received from Michael Smith",
  ],
};
const data2 = {
  firstName: "Emily",
  lastName: "Johnson",
  username: "emily.johnson123",
  password: "5678",

  accounts: [
    {
      accountNumber: 123456,
      accountBalance: "450$",
      cardDetails: {
        cardNumber: "4000 1234 5678 9012",
        expiryDate: "09/24",
        pin: "7890",
        cvv: "987",
      },
    },
    {
      accountNumber: 654321,
      accountBalance: "150$",
      cardDetails: {
        cardNumber: "5100 0000 1111 2222",
        expiryDate: "05/26",
        pin: "4567",
        cvv: "654",
      },
    },
    {
      accountNumber: 987654,
      accountBalance: "320$",
      cardDetails: {
        cardNumber: "6011 3333 4444 5555",
        expiryDate: "12/28",
        pin: "2345",
        cvv: "321",
      },
    },
  ],

  beneficiaries: [
    {
      name: "John Doe",
      accountNumber: "562012",
      username: "john.doe456",
      timestamp: "April 10, 2023, 02:30 PM"
    },
    {
      name: "Michael Smith",
      accountNumber: "967291",
      username: "michael.smith456",
      timestamp: "April 15, 2023, 11:20 AM"
    },
  ],

  transactionHistory: [
   
    {
      accountNumber: 123456,
      transaction: "200$",
      type: "debit",
      timestamp: "2024-05-12 03:15 PM",
      fromTo: "John Doe",
    },
    {
      accountNumber: 123456,
      transaction: "1650$",
      type: "credit",
      timestamp: "2024-04-30 09:45 AM",
      fromTo: "Self",
    },
    {
      accountNumber: 654321,
      transaction: "150$",
      type: "debit",
      timestamp: "2024-03-22 05:30 PM",
      fromTo: "Michael Smith",
    },
    {
      accountNumber: 654321,
      transaction: "300$",
      type: "credit",
      timestamp: "2024-02-18 10:20 AM",
      fromTo: "Self",
    },
    {
      accountNumber: 987654,
      transaction: "320$",
      type: "credit",
      timestamp: "2023-12-28 11:00 AM",
      fromTo: "Self",
    },
    {
      accountNumber: 123456,
      transaction: "-500$",
      type: "debit",
      timestamp: "2023-11-05 03:30 PM",
      fromTo: "Bank",
    },
    {
      accountNumber: 123456,
      transaction: "-500$",
      type: "debit",
      timestamp: "2023-10-15 09:45 AM",
      fromTo: "Bank",
    },
    
  ],

  loans: [
    {
      initialAmount: "2000$",
      approvalTimestamp: "2023-09-18 02:50 PM",
      approvedToAccountNumber: 123456,
      loanTerm: {
        duration: 4,
        unit: "years",
      },
      interest: "18%",
      repayableAmount: "3440$",
      paymentHistory: [
        {
          accountNumber: 123456,
          transaction: "500$",
          timestamp: "2023-11-05 03:30 PM",
        },
        {
          accountNumber: 123456,
          transaction: "500$",
          timestamp: "2023-10-15 09:45 AM",
        },
      ],
      balance: "2440$",
    },
  ],
  
  notifications: [
    "October 15, 2023, 09:45 AM: 500$ was repaid towards loan",
    "November 5, 2023, 03:30 PM: 500$ was repaid towards loan",
    "December 28, 2023, 11:00 AM: 320$ was self deposited",
    "February 18, 2024, 10:20 AM: 300$ was self deposited",
    "March 22, 2024, 05:30 PM: 150$ was transferred from Michael Smith",
    "April 30, 2024, 09:45 AM: 450$ was self deposited",
    "May 12, 2024, 03:15 PM: 200$ was transferred to John Doe",
    "April 10, 2023, 02:30 PM: John Doe was added to beneficiaries",
    "April 15, 2023, 11:20 AM: Michael Smith was added to beneficiaries",
  ],
};