import {LapInterface} from './lap.interface';
import {DataInterface} from '../data/data.interface';
import {DurationClassAbstract} from '../duration/duration.class.abstract';
import {LapTypes} from './lap.types';
import {LapJSONInterface} from './lap.json.interface';
import {DataJSONInterface} from '../data/data.json.interface';

export class Lap extends DurationClassAbstract implements LapInterface {

  public type: LapTypes;

  constructor(startDate: Date, endDate: Date, type: LapTypes) {
    super(startDate, endDate);
    this.type = type;
  }

  toJSON(): LapJSONInterface {
    const stats = {};
    this.stats.forEach((value: DataInterface, key: string) => {
      Object.assign(stats, value.toJSON());
    });
    return {
      startDate: this.startDate.toJSON(),
      endDate: this.endDate.toJSON(),
      type: this.type,
      stats: stats
    };
  }
}
