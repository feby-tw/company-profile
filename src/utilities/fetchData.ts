export async function fetchTeamMembers() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5'); // Fetch 5 team members
      const data = await response.json();
      return data.results; // Assuming the team members are in the 'results' array of the response
    } catch (error) {
      console.error('Error fetching team members:', error);
      return [];
    }
  }
  