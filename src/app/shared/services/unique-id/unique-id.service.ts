import { Injectable } from '@angular/core';
import { v4 as uuiidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGenerateIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUiniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty');
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGenerateIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGenerateUniqueIds(): number {
    return this.numberOfGenerateIds;
  }

  private generateUniqueId(): string {
    return uuiidv4();
  }
}
