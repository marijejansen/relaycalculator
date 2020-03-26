import { Component, Vue } from "vue-property-decorator";

@Component
class NameFormatMixin extends Vue {
  public nameShort(firstName: string, lastName: string): string {
    var name = firstName;
    var lastNameSplit = lastName.split(" ");
    name += lastNameSplit.length > 1 ? " " + lastNameSplit[1].charAt(0) : "";
    name += " " + lastName.charAt(0) + ".";
    return name;
  }

  public getFullName(firstName: string, lastName: string): string {
    return firstName + " " + this.lastNameFormat(lastName);
  }

  public lastNameFormat(lastName: string): string {
    var splitName = lastName.split(" ");
    var formattedName = "";
    for (let i = 1; i < splitName.length; i++) {
      formattedName += splitName[i] + " ";
    }
    formattedName += splitName[0];
    return formattedName;
  }
}

export default NameFormatMixin;
