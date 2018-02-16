import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs/Subject';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: HeroService = new HeroService(null, null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: HeroService, useValue: heroService}]
    })
    .compileComponents();

    spyOn(heroService, 'getHeroes').and.returnValue(new Subject());
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
