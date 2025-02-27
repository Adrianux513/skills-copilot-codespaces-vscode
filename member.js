function skillsMember() {
  return {
    name: 'John',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    // Method
    showSkills: function() {
      // we can access the object properties using `this`
      return this.skills;
    }
  };
}