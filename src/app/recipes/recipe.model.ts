/**
 * Created by Akhtar on 6/Jan/19.
 */

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}
