const employeesData = [
	{
    id: '1',
		picture: 'https://randomuser.me/api/portraits/men/86.jpg',
		firstName: 'John',
		lastName: 'Barton',
    position: 'CEO',
    manager: '0',
  },
	{
    id: '2',
		picture: 'https://randomuser.me/api/portraits/women/23.jpg',
		firstName: 'Jina',
		lastName: 'Val',
    position: 'Product Director',
    manager: '1',
	},
	{
    id: '3',
		picture: 'https://randomuser.me/api/portraits/women/90.jpg',
		firstName: 'Ella',
		lastName: 'Purnell',
    position: 'Staff Accountant',
    manager: '2',
	},
	{
    id: '4',
		picture: 'https://randomuser.me/api/portraits/men/44.jpg',
		firstName: 'Brian',
		lastName: 'Smith',
    position: 'Team Leader',
    manager: '1',
	},
	{
    id: '5',
		picture: 'https://uifaces.co/our-content/donated/BMGfa1yq.png',
		firstName: 'Beau',
		lastName: 'Simensen',
    position: 'Project Manager',
    manager: '2',
	},
  {
    id: '6',
		picture: 'https://randomuser.me/api/portraits/men/14.jpg',
		firstName: 'Arthur',
		lastName: 'Brown',
    position: 'QA Engineer',
    manager: '5',
	},
  {
    id: '7',
		picture: 'https://randomuser.me/api/portraits/women/9.jpg',
		firstName: 'Eliza',
		lastName: 'Coupe',
    position: 'Software Engineer',
    manager: '4',
	},
	{
    id: '8',
		picture: 'https://randomuser.me/api/portraits/men/11.jpg',
		firstName: 'Phill',
		lastName: 'Kernes',
    position: 'Software Engineer',
    manager: '4',
	},
  {
    id: '9',
		picture: 'https://randomuser.me/api/portraits/women/52.jpg',
		firstName: 'Amanda',
		lastName: 'Phillips',
    position: 'Cloud Architect',
    manager: '2',
	},
];

const tasksData = [
  {
    id: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    assignDate: '19.3.2020',
    dueDate: '25.3.2020',
  },
  {
    id: '2',
    text: 'Sed do eiusmod tempor incididunt.',
    assignDate: '2.4.2020',
    dueDate: '15.4.2020',
  },
  {
    id: '3',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    assignDate: '28.3.2020',
    dueDate: '1.4.2020',
  },
  {
    id: '4',
    text: 'Nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
    assignDate: '10.3.2020',
    dueDate: '18.3.2020',
  },
  {
    id: '5',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    assignDate: '28.3.2020',
    dueDate: '1.4.2020',
  },
  {
    id: '6',
    text: 'Nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
    assignDate: '10.3.2020',
    dueDate: '18.3.2020',
  }
];

const subordinatesData = (managerId) => {
  let data = employeesData.filter(employee => employee.manager === managerId);
  let res = [];
  data.forEach(subord => {
    const { id, firstName, lastName, position } = subord;
    const newSubord = { id, firstName, lastName, position };
    res.push(newSubord);
  });
  return res;
}

export {
  employeesData, 
  tasksData, 
  subordinatesData
};