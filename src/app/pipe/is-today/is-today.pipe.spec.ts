import { IsTodayPipe } from './is-today.pipe';

describe('SameDatePipe', () => {
  it('create an instance', () => {
    const pipe = new IsTodayPipe();
    expect(pipe).toBeTruthy();
  });
});
