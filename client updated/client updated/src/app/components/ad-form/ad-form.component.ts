// src/app/components/ad-form/ad-form.component.ts
 
import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';  // קישור לשירות מתוך תיקיית services
import { ActivatedRoute, Router } from '@angular/router';
import { Ad } from '../../models/ad.model';  // קישור למודל מתוך תיקיית models
 
@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {
  ad: Ad = { id: 0, title: '', description: '', location: '', creator: '' };
 
  constructor(private adService: AdService, private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adService.getAd(Number(id)).subscribe(ad => this.ad = ad);
    }
  }
 
  onSubmit(): void {
    if (this.ad.id) {
      this.adService.updateAd(this.ad.id, this.ad).subscribe(() => this.router.navigate(['/ads-list']));
    } else {
      this.adService.addAd(this.ad).subscribe(() => this.router.navigate(['/ads-list']));
    }
  }
}
