import { Observable, Observer }   from 'rx';
//import {Observable, Observer, Subject, ReplaySubject, Operator , Rx  }  from 'rx';
//import Complex from 'complex'


export default class Kata {


    add(source : Observable<String>) : Observable<String> {

        //console.log(Complex.from(1, 2));

        return Observable.create( (obs: Observer<String>) => {});
    }
}
