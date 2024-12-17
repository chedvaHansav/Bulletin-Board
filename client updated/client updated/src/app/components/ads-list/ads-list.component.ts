// src/app/components/ads-list/ads-list.component.ts
 
import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';  // קישור לשירות מתוך תיקיית services
import { Ad } from '../../models/ad.model';  // קישור למודל מתוך תיקיית models
import {Router} from '@angular/router'

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
// export class AdsListComponent implements OnInit {
//   ads: Ad[] = [];
//   searchTerm = ''; // שדה לחיפוש
//   filteredAds: Ad[] = []; // רשימת מודעות מסוננת

//   constructor(private adService: AdService,private router: Router ) { }

//   ngOnInit(): void {
//     this.adService.getAds().subscribe(data => {
//       this.ads = data;
//       this.filteredAds = data;
//     });
//   }
 
//   deleteAd(id: number): void {
//     this.adService.deleteAd(id).subscribe(() => {
//       this.ads = this.ads.filter(ad => ad.id !== id);
//       this.filterAds(); // עדכון הרשימה המסוננת לאחר מחיקה
//     });
//   }

//   editAd(id: number): void {
//     this.router.navigate(['/ad-form', id]);  // ניווט לעמוד העדכון עם ה-ID של המודעה
//   }

//   filterAds(): void {
//     this.filteredAds = this.ads.filter(ad =>
//       ad.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
//       ad.description.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );


// }
 
// }


// export class AdsListComponent implements OnInit {
//   ads: Ad[] = [];
//   filteredAds: Ad[] = [];
//   searchTerm: string = '';
//   showAddAdForm: boolean = false;  // משתנה לשלוט בהצגת הטופס

//   constructor(private adService: AdService) {}

//   ngOnInit(): void {
//     this.adService.getAds().subscribe(data => {
//       this.ads = data;
//       this.filteredAds = data;
//     });
//   }


//   filterAds(): void {
//     this.filteredAds = this.ads.filter(ad =>
//       ad.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
//       ad.description.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }
// }

export class AdsListComponent implements OnInit {
  ads: Ad[] = [];
  filteredAds: Ad[] = [];
  searchTerm: string = '';
  showAddAdForm: boolean = false;  // משתנה לשלוט בהצגת הטופס

  newAd: Ad = {
    id: 0,               // ברירת מחדל, ייתכן שה-ID ייווצר אוטומטית בשרת
    title: '',
    description: '',
    location: '',
    creator: ''
  };

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.adService.getAds().subscribe(data => {
      this.ads = data;
      this.filteredAds = data; // אם יש חיפוש שמסנן את המודעות
    });
  }

  // פונקציה למחיקת מודעה
  deleteAd(id: number): void {
    this.adService.deleteAd(id).subscribe(() => {
      this.ads = this.ads.filter(ad => ad.id !== id);  // מסנן את המודעה שנמחקה מהרשימה
      this.filteredAds = this.filteredAds.filter(ad => ad.id !== id); // עדכון הרשימה המסוננת
    });
  }


  // פונקציה להוספת מודעה חדשה
  addAd(): void {
    if (this.newAd.title && this.newAd.description && this.newAd.location && this.newAd.creator) {
      this.adService.addAd(this.newAd).subscribe(response => {
        this.ads.push(response);
        this.filteredAds.push(response);
        this.newAd = {
          id: 0,
          title: '',
          description: '',
          location: '',
          creator: ''
        };
        this.showAddAdForm = false; // סגירת הטופס לאחר הוספה
      });
    } else {
      alert('יש למלא את כל השדות');
    }
  }

  // פונקציה להיפוך מצב הצגת טופס ההוספה
  toggleAddAdForm(): void {
    this.showAddAdForm = !this.showAddAdForm;
  }


  // פונקציה לסינון מודעות לפי חיפוש
  filterAds(): void {
    this.filteredAds = this.ads.filter(ad =>
      ad.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      ad.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      ad.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      ad.creator.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
