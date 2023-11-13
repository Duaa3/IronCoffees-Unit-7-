export class coffee {
    image_url!: string;
    _id!: string;
    name!: string;
    tagline!: string;
    description!: string;
    first_roasted!: string;
    roaster_tips!: string;
    strength_level!: number;
    contributed_by!: string;
    expireAt!: string;
    __v!: number;
  
    constructor(data: Partial<coffee> = {}) {
      Object.assign(this, data);
    }
  }
  