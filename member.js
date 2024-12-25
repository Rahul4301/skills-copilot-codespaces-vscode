function skillsMember(){

    this.name = "John";
    this.age = 25;
    this.skills = ['HTML', 'CSS', 'JS'];

    console.log(this.name + " is " + this.age + " years old and has skills in " + this.skills.join(', ') + ".");
}