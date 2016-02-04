
import Calculatorsdz from '../alex';
import { expect } from 'chai';
import { Observable }   from 'rx';
import Cpx  from 'complex';

describe('Sandbox rx', () => {
    /*var posi = new Complex(2, 3);
    var pos = Complex.from(10, 10);*/
    let toto: Observable<string> = Observable.just("coucou");
    let result: number = 0;
    toto.subscribe((value: string) => {
      result++;
    });
    expect(result).to.be.equal(1);
});

describe('Sandbox rx number', () => {


    //var posi = new Cpx(2, 3);
    //var pos = Cpx.from(10, 10);

    new Calculatorsdz().add(Observable.just("cocuou"));

    /*let toto: Observable<string> = Observable.just("coucou");
    let result: number = 0;
    toto.flatMap((value: string) : Observable<number> => {return Observable.fromArray[1, 2 ,3] }).subscribe((value: number) => {
      result++;
    });
    expect(result).to.be.equal(5);*/
});
