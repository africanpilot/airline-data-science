import product8Image from 'assets/img/products/product_640-8.jpg';
import product9Image from 'assets/img/products/product_640-9.jpg';
import product10Image from 'assets/img/products/product_640-10.jpg';
import product11Image from 'assets/img/products/product_640-11.jpg';
import product12Image from 'assets/img/products/product_640-12.jpg';

import user15Image from 'assets/img/users/user15.jpg';
import user16Image from 'assets/img/users/user16.jpg';

export const productsData = [
  {
    id: 1,
    image: product8Image,
    title: 'Use Cases Created',
    description: 'Total exsisting use cases...',
    right: '15',
    useCaseDue: 'Nov 30, 2019'
  },
  {
    id: 2,
    image: product9Image,
    title: 'Data loads',
    description: 'Total data loads...',
    right: '6',
    useCaseDue: 'Nov 30, 2019'
  },
  {
    id: 3,
    image: product10Image,
    title: 'Report Formats',
    description: 'Total report formats created...',
    right: '8',
    useCaseDue: 'Nov 30, 2019'
  },
  {
    id: 4,
    image: product11Image,
    title: 'Rules saved',
    description: 'Total rules logs saved...',
    right: '24',
    useCaseDue: 'Nov 30, 2019'
  },
  {
    id: 5,
    image: product12Image,
    title: 'ML Models',
    description: 'Total models created...',
    right: '12',
    useCaseDue: 'Nov 30, 2019'
  },
];

export const avatarsData = [
  {
    avatar: user15Image,
    name: 'Richard',
    date: '1 month ago',
  },
  {
    avatar: user16Image,
    name: 'Kirk',
    date: '1 month ago',
  },
  {
    avatar: user15Image,
    name: 'Richard',
    date: '1 month ago',
  },
  {
    avatar: user16Image,
    name: 'Kirk',
    date: '1 month ago',
  },
  {
    avatar: user15Image,
    name: 'Richard',
    date: '1 month ago',
  },
  {
    avatar: user16Image,
    name: 'Kirk',
    date: '1 month ago',
  },
  {
    avatar: user15Image,
    name: 'Richard',
    date: '1 month ago',
  },
  {
    avatar: user16Image,
    name: 'Kirk',
    date: '1 month ago',
  },
  {
    avatar: user15Image,
    name: 'Richard',
    date: '1 month ago',
  },
  {
    avatar: user16Image,
    name: 'Kirk',
    date: '1 month ago',
  },
  {
    avatar: user15Image,
    name: 'Richard',
    date: '1 month ago',
  },
  {
    avatar: user16Image,
    name: 'Kirk',
    date: '1 month ago',
  },
  {
    avatar: user15Image,
    name: 'Richard',
    date: '1 month ago',
  },
  {
    avatar: user16Image,
    name: 'Kirk',
    date: '1 month ago',
  },
];

export const userProgressTableData = [
  {
    avatar: product8Image,
    name: 'Use Case 1',
    date: '3 month ago',
    progress: 41,
    taskduedate: 'Jan 31, 2020',
    useCaseDueDate: 'Feb 29, 2020',
    version: 'V2.3.4',
    teamAssigned: 'teamsharks',
  },
  {
    avatar: product9Image,
    name: 'Load Data',
    date: '1 year ago',
    progress: 60,
    taskduedate: 'Jan 31, 2020',
    useCaseDueDate: 'Feb 29, 2020',
    version: 'V2.3.4',
    teamAssigned: 'teamsharks',
  },
  {
    avatar: product10Image,
    name: 'Quality Control',
    date: '2 hour ago',
    progress: 50,
    taskduedate: 'Jan 31, 2020',
    useCaseDueDate: 'Feb 29, 2020',
    version: 'V2.3.4',
    teamAssigned: 'teamsharks',
  },
  {
    avatar: product11Image,
    name: 'Data Analysis',
    date: 'a month ago',
    progress: 40,
    taskduedate: 'Jan 31, 2020',
    useCaseDueDate: 'Feb 29, 2020',
    version: 'V2.3.4',
    teamAssigned: 'teamsharks',
  },
  {
    avatar: product10Image,
    name: 'ML Models',
    date: '2 years ago',
    progress: 30,
    taskduedate: 'Jan 31, 2020',
    useCaseDueDate: 'Feb 29, 2020',
    version: 'V2.3.4',
    teamAssigned: 'teamsharks',
  },
  {
    avatar: product12Image,
    name: 'Evaluation',
    date: '6 months ago',
    progress: 25,
    taskduedate: 'Jan 31, 2020',
    useCaseDueDate: 'Feb 29, 2020',
    version: 'V2.3.4',
    teamAssigned: 'teamsharks',
  },
];


export const todosData = [
  { id: 1, title: 'task -1', done: true },
  { id: 2, title: 'task -2', done: false },
  { id: 3, title: 'task -3', done: true },
  { id: 4, title: 'task -4', done: true },
  { id: 5, title: 'task -5', done: false },
];

export const chartjs = {
  bar: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Expense for this year',
          backgroundColor: '#6a82fb',
          stack: 'Expense',
          data: [10000, 30000, 50000, 80000, 60000, 20000, 10000],
        },
        {
          label: 'Expense for last year',
          backgroundColor: '#fc5c7d',
          stack: 'Expense',
          data: [30000, 80000, 50000, 100000, 60000, 40000, 90000],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
        yAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
      },
    },
  },
  doughnut: {
    data: {
      datasets: [
        {
          data: [20, 30, 40, 50, 60],
          backgroundColor: [
            '#6a82fb',
            '#fc5c7d',
            '#45b649',
            '#00c9ff',
            '#ffd700',
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart',
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  },
  line: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue for this year',
          borderColor: '#6a82fb',
          backgroundColor: '#6a82fb',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },

        {
          label: 'Revenue for last year',
          borderColor: '#fc5c7d',
          backgroundColor: '#fc5c7d',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Stacked Area',
      },
      tooltips: {
        intersect: false,
        mode: 'nearest',
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: 'Month',
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  },
};
