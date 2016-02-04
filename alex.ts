// import {Observable, Observer, Subject, ReplaySubject, Operator , Rx  }  from 'Rx';
//import Complex from 'complex'

export default class Kata {


    add(source : Rx.Observable<String>) : Rx.Observable<String> {

        console.log(Complex.from(1, 2));

        return Rx.Observable.create( (obs:Rx.Observer<String>) => {});
    }
}
