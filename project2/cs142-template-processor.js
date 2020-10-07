class Cs142TemplateProcessor {
  constructor(template) {
    this.template = template;
  }
  fillIn(dictionary) {
    let temp = this.template;
    let keys = temp.match(/{{[a-zA-Z]*}}/g);
    for (let i = 0; i < keys.length; i++) {
      keys[i] = keys[i].slice(2, keys[i].length - 2);
    }
    keys.map((el) =>
      Object.keys(dictionary).includes(el) === true
        ? (temp = temp.replace(`{{${el}}}`, dictionary[el]))
        : (temp = temp.replace(`{{${el}}}`, ""))
    );
    return temp;
  }
}
