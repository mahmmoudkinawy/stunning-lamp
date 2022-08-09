import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EstateVille - Real Estate';
  constructor(private router: Router,private metaTagService: Meta , private metaTitle:Title ) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // window.scrollTo(0, 0);
    });


    this.addMeta()
        this.metaTitle.setTitle('EstateVille - Real Estate for Developing, Investing for the Best Future');


   

  }

  addMeta() {
    this.metaTagService.addTags([
        { property: "og:url", content: 'https://estatevilleeg.com/home' },
        { property: "og:type", content: 'website' },
        { property: "og:image", content: 'https://i.ibb.co/SNZPjhj/Estate-Ville-Vertical-Logo-Blue.png' },
        { name: "og:description", content: 'estateville is Finest Property Advice Devoted to well-versed management and teamwork , we believe that initiative is the way to implement our vision into reality.' },

        { name: "description", content: 'estateville is Finest Property Advice Devoted to well-versed management and teamwork , we believe that initiative is the way to implement our vision into reality.' },
        { property: "og:title", content: "EstateVille - Real Estate for Developing, Investing for the Best Future" },
        {
            name: "keywords", content: `estate ville,
            estateville,
            estatevilleeg,
            Estate Ville,
            rent,
            home,
            sale,
            chalet,
            Estate,
            Real Estate,
            Estate Properties,
            Estate New,
            Estate for Sale,
            Properties for sale,
            administrative properties,
            Sale Real Estate,
            Commercial Real Estate,
            Best Real Estate,
            Properties Property,
            realtor,
            houses for sale,
            homes for sale,
            property for sale,
            homes for rent,
            land for sale,
            mls listings,
            condos for sale,
            mls listing,
            estate agents,
            for sale,
            newhome,
            home for sale,
            foreclosure,
            rent house,
            property finder eg,
            aqarmap egypt,
            maadi real estate,
            compound egypt,
            marassi rental,
            dyar compound,
            caesar sodic,
            lavista cascada,
            october plaza,
            mivida new cairo,
            properties egypt,
            rent maadi,
            zayed 2000,
            acacia compound,
            el patio 7,
            west arabella,
            aqar properties,
            property finder us,
            patio zahraa,
            egyptian real estate,
            the property finder,
            aqar finder,
            rent egypt,
            houses in cairo,
            aqar egypt,
            new cairo houses,
            house rent in cairo,
            zamalek real estate,
            aqar map egypt,
            villa in cairo,
            maadi for sale,
            olx new cairo,
            aqarmap rent,
            rent cairo,
            flats in cairo,
          compound cairo,
          zamalek rent,
          Entrada Compound,
          Atika Compound,
          The City Valley Compound,
          The City Compound,
          Vinci Compound,
          Midtown Sky Compound,
          OIA Compound,
          Janoub Compound,
          Midtown Condo,
          Serrano Compound,
          La Capitale Compound,
          Catalan Compound,
          The Loft Compound,
          Town Gate Compound,
          Park Lane Compound,
          Armonia Compound,
          Zavani Compound,
          Rhodes Compound,
          The Capital Way Compound,
          new capital,
          apartments for rent near me,
          property finder cairo,
          villas for sale in new cairo,
          apartments for sale in new cairo,
          rent apartment in new cairo,
          property for sale in hurghada,
          apartments for sale hurghada,
          real estate companies in egypt,
          apartments for sale in maadi,
          katameya heights villas for sale,
          real estate in hurghada,
          villa for rent in katameya heights,
          rent apartment in zamalek,
          compound new cairo,
          studio for rent in cairo,
          maadi rent apartment,
          apartment for rent in alexandria egypt,
          propertyfinderdubai,
          sheikh zayed compounds,
          best compounds in new cairo,
          hurghada rent apartment,
          mountain view october,
          regents park new cairo,
          mountain view sokhna,
          zamalek apartment for sale,
          villa for rent new cairo,
          acacia compound,
          vgk compound,
          mivida compound,
          mountain view october park,
          mountain view icity october,
          stella sidi abdel rahman,
          g cribs el gouna,
          hayah residence,
          panorama el shorouk,
          property finder cairo egypt,
          property finder egypt cairo,
          egyptian houses for sale,
          cheap property for sale egypt,
          property finder sale,
          rent in cairo egypt,
          real estate property finder,
          aqarmap alexandria egypt,
          property finder us,
          best compounds in new cairo 2020,
          new listings real estate,
          homes for rent sale,
          house flats for sale,
          apartments for sale in masr el gedida,
          property for sale in el gouna,
          best compound in egypt,
          zed new cairo prices,
          chillout mountain view,
          property finder egypt manager,
          egyptian real estate,
          property finder egypt new cairo,
          cairo property finder,
          property finder new cairo,
          egypt real estate for sale,
          the property finder,
          i property real estate egypt,
          cairo egypt real estate,
          buy real estate in egypt,
          the egypt real estate,
          properties for sale egypt,
          cairo real estate egypt,
          property finder rent,
          buy property in egypt,
          houses for sale in egypt,
          apartments for sale in egypt,
          buy property in cairo,
          property in cairo,
          for sale in egypt,
          buy house in egypt,
          houses for sale in egypt cairo,
          property finder egypt rent,
          property for sale in cairo egypt,
          property for sale in cairo,
          homes in cairo egypt,
          houses in cairo egypt,
          cairo egypt homes for sale,
          homes in egypt for sale,
          real estate egypt new cairo,
          egypt property sales,
          buy home in egypt,
          apartment for sale in egypt cairo,
          villas for sale in egypt,
          mls real estate egypt,
          house prices in egypt,
          property finder alexandria egypt,
          buy house cairo,
          house for sale cairo,
          buy apartment in egypt,
          cheap apartments for sale in egypt,
          houses in egypt for rent,
          flats for sale in egypt,
          cheap houses for sale in egypt,
          buy flat in egypt,
          property prices in egypt,
          villas for sale in egypt cairo,
          alexandria egypt real estate,
          property for sale alexandria egypt,
          buy villa egypt,
          real estate new cairo,
          cairo apartment for sale,
          buy apartment in cairo,
          flats for sale in cairo,
          alexandria egypt homes for sale,
          houses for sale in egypt alexandria,
          properties for sale in new cairo,
          villa for sale in cairo,
          property in alexandria egypt,
          rent house in cairo egypt,
          rent a house in cairo egypt,
          buy apartment in new cairo,
          real estate prices in egypt,
          cheap apartments for sale in cairo egypt,
          houses for sale alexandria egypt,
          apartments in alexandria egypt for sale,
          land for sale in egypt,
          houses in alexandria egypt,
          property finder ksa,
          buy property in egypt for foreigner,
          apartment for rent in egypt,
          buying land in egypt,
          olx egypt real estate,
          apartment for sale in alexandria,
          apartments in new cairo,
          olx egypt properties,
          buy apartment in alexandria egypt,
          flats for sale in new cairo,
          flat for sale in alexandria egypt,
          property finder egypt north coast,
          olx egypt property for sale,
          villas for sale in alexandria egypt,
          olx egypt apartments for sale,
          real estate maadi cairo egypt,
          property for sale in egypt hurghada,
          egypt real estate market,
          real estate companies in alexandria egypt,
          real estate projects in egypt,
          properties for rent in cairo,
          real estate investment in egypt,
          egyptian real estate market,
          real estate market analysis in egypt 2020,
          house for sale in hurghada egypt,
          top real estate brokerage companies in egypt,
          real estate in egypt 2020,
          maadi property for sale,
          house for sale hurghada,
          real estate agent egypt,
          villas in cairo egypt,
          for sale hurghada,
          top 10 real estate brokers in egypt,
          north coast egypt properties for sale,
          commercial real estate egypt,
          villas for rent in egypt,
          buying property in hurghada egypt,
          hurghada flats for sale,
          katameya heights apartments for sale,
          cairo egypt apartments,
          apartments for sale in hurghada egypt,
          north coast egypt for sale,
          katameya heights apartments,
          property finder fifth settlement,
          katameya heights villas,
          hurghada buy apartment,
          madinaty houses for sale,
          rent in egypt cairo,
          real estate egypt hurghada,
          real estate companies in cairo,
          property finder madinaty,
          best real estate companies in egypt,
          villa for sale in north coast egypt,
          katameya heights for sale,
          madinaty property finder,
          land for sale in hurghada egypt,
          real estate companies in new cairo,
          katameya heights prices,
          for rent in new cairo,
          top real estate companies in egypt,
          hurghada villa for sale,
          villa for sale in maadi,
          property finder north coast,
          top compounds in egypt,
          apartment for rent in egypt cairo,
          flat for rent in cairo,
          zamalek cairo apartments,
          studio for sale in new cairo,
          apartments alexandria egypt,
          list of real estate companies in egypt,
          hurghada property resale,
          katameya heights compound,
          buy property in hurghada,
          hurghada real estate for sale,
          katameya heights rent,
          New Cairo - El Tagamoa,
          North Coast,
          Ain Sukhna,
          Porto Sokhna,
          Not in Compound,
          Porto South Beach,
          Dar Misr,
          Amwaj,
          Hyde Park New Cairo,
          Lasirena Sokhna,
          Mountain View iCity,
          Marassi,
          Marina 5,
          Mountain View Hyde Park,
          Porto Golf Marina,
          Porto Marina,
          Zomoroda,
          Taj City,
          Lotus,
          Stella Di Mare,
          Hacienda Bay,
          Marina 4,
          Golf Porto Marina,
          Marina 2,
          Marseilia Beach 4,
          Blue Bay Asia,
          Stella Heights,
          Mivida,
          Telal Sokhna,
          Marseilia Beach 2,
          Bellagio,
          Blumar Sokhna,
          Fifth Square,
          Al Maqsad,
          2020 Compound,
          Gardenia,
          Maraqia,
          Dimora North Coast,
          Al Shorouk,
          VGK,
          Aida Beach,
          Marina Wadi Degla,
          Marina 6,
          Lazorde Bay,
          Rehab City,
          IL Monte Galala,
          Layan,
          Midtown,
          Beit Al Watan,
          Andalus,
          Al Yasmine,
          Madinaty,
          Blue Blue,
          Marseilia Beach 3,
          Galleria Moon Valley,
          Mena 4,
          Marina 7,
          The Square,
          Stella Di Mare Sea View,
          Palm Hills New Cairo,
          Jayd,
          Cairo Festival City,
          Blue Bay,
          Green Beach,
          Ramsis,
          Fouka Bay,
          La Vista Topaz of Ain Sokhna,
          Al Ahram,
          El Fayrouz,
          Swan Lake,
          Al Burouj,
          Nakheel,
          Telal North Coast,
          Marina 1,
          Sephora Heights,
          Tag Sultan,
          Seashell,
          Bella Mera,
          Marina 3,
          Porto New Cairo,
          Rosana,
          Azzar,
          EL WADI EL Ain Sokhna,
          Hacienda White,
          Blumar North Coast,
          Aqua View,
          La Jolie,
          La Sirena Resort,
          Piacera,
          Al Diyar,
          Lasirena North Coast,
          Azha,
          La Vista Bay North Coast,
          Village Gate,
          Marina City,
          Amorada,
          La Vista 3,
          Gaia,
          Ashrafeya,
          Nice,
          The Village,
          Midtown Condo,
          Mountain View Sokhna,
          90 Avenue,
          Marseilia Beach 1,
          Dimora,
          Dyar,
          Palm Beach,
          Sand Beach,
          La Luna Beach,
          Arabia,
          Coronado Marina,
          Bo Island North Coast,
          Capital Heights 2,
          Al Hegaz,
          Celia,
          Kattameya Gardens,
          Stone Park,
          Abu Al-Hool,
          Horus & El Remal El Zahabeya,
          Agora,
          Regents Park,
          Dolphin Beach,
          Mountain View 1,
          EL Patio ORO,
          Lake View,
          Ritage,
          AZAD,
          Les Rois,
          Orlando,
          Rittal Vieux,
          Amigo,
          The Address East,
          El Gawhara,
          Malibu,
          Diplomats,
          Stella Compounds,
          Al Reviera,
          Gharb Golf,
          Heliobeach,
          Al Hayah,
          Stella Marina,
          compounds in egypt new cairo,
          شقق للبيع,
          شقق للبيع والايجار,
          بروبرتي فايندر,
          عقارات مصر,
          بروبرتى فايندر,
          عقارات للبيع,
          عقار للبيع,
          اوليكس للعقارات,
          القطامية هايتس,
          ارض الجولف,
          قطامية هايتس,
          الحي المتميز,
          عقارات في مصر,
          مواقع عقارات,
          موقع العقارات,
          بيع عقارات,
          شقق للبيع في المعادي,
          شقق للبيع بالتجمع الخامس,
          حى السفارات مدينة نصر,
          شقق للايجار مدينة نصر,
          بيت الوطن التجمع الخامس,
          شقق للإيجار بالتجمع الخامس,
          شقق للإيجار بالاسكندرية,
          شقق للبيع في الشيخ زايد,
          الاندلس التجمع الخامس,
          شقق للبيع بمدينة نصر,
          شقق للايجار في الاسكندرية,
          شقق للبيع في مدينة نصر,
          شقق مفروشة للإيجار في القاهرة,
          شقق للبيع في اكتوبر,
          شقق للبيع مصر الجديدة,
          بروبرتي فايندر مصر,
          افضل تطبيقات العقارات في مصر,
          مواقع بيع عقارات,
          عقار للبيع في مصر,
          عقارات للبيع في مصر,
          مواقع العقارات المجانية,
          سوق عقارات مصر,
          أشهر مواقع التسويق العقاري بمصر,
          مواقع لبيع الشقق,
          عقارات مصر اون لاين,
          الوسيط عقارات مصر,
          سوق العقارات فى مصر,
          سوق العقارات مصر,
          اسعار العقارات فى مصر,
          شقق للبيع في مصر,
          شركة تسويق العقارية,
          شركة تسويق عقارى,
          كمبوند الديار التجمع الخامس,
          ماونتن فيو هايد بارك,
          شقق للبيع فى العاصمة الادارية الجديدة,
          شقق في العاصمة الادارية,
          شقق للبيع في بيت الوطن,
          شقق للايجار في الزمالك,
          شقق للبيع في العاصمة الادارية,
          العاصمة الإدارية الجديدة شقق,
          افضل كمبوندات في مصر,
          اسعار الشقق في الرحاب,
          شقق مفروشة للايجار بالتجمع الخامس,
          شاليهات للبيع في مراسي,
          اسعار الشقق فى العاصمة الادارية الجديدة,
          شقق للإيجار بمدينة نصر,
          فيلا للبيع التجمع الخامس,
          فيلات للبيع في الرحاب,
          اسعار شقق الرحاب,
          شقق للبيع في التجمع,
          حي النرجس التجمع الخامس,
          ستيلا سيدى عبد الرحمن,
          شقق للإيجار في مدينة نصر,
          ماونتن فيو اكتوبر بارك,
          حدائق المهندسين الشيخ زايد,
          شقق فى حدائق الاهرام,
          شقق للبيع في العاصمة الإدارية,
          ماونتن فيو راس الحكمة,
          شقق فى العاصمة الادارية الجديدة,
          كمبوند الخمائل الشيخ زايد,
          حي الدبلوماسيين التجمع الخامس,
          مدينة نصر حى السفارات,
          شقق للايجار بالقاهرة,
          محلات العاصمة الادارية,
          شقق للبيع فى التجمع الخامس,
          شقق للبيع فى المعادى,
          اسعار شقق مدينة المستقبل طريق مصر اسماعيلية,
          اسعار شقق التجمع الخامس,
          اسعار شقق فى التجمع الخامس,
          اسعار الشقق فى حدائق الاهرام,
          شقق للبيع التجمع الخامس,
          كمبوند جاليريا مون فالي التجمع الخامس,
          اسعار الفلل في مدينتي,
          خريطة اكتوبر الجديدة,
          شارع القدس الشريف النزهة الجديدة,
          شاليهات للبيع فى مارينا,
          شقق في التجمع الخامس للبيع,
          اسعار شقق حدائق الاهرام,
          شقة للايجار مدينة نصر,
          شقق للبيع في شارع 77 المعادي,
          شقق للبيع 70م الشيخ زايد,
          شقق للبيع بالاسكندرية 60 الف,
          شقق للبيع 6 أكتوبر بنك الاسكان والتعمير,
          شقق للبيع بالاسكندرية العصافرة 45,
          شقق للبيع بالاسكندرية بالتقسيط 2021,
          شقق للبيع بالتقسيط امتداد 15 مايو,
          شقق للبيع بالاسكندرية 100 الف 2020,
          شقق للبيع بالاسكندرية تقسيط حتى 10 سنوات,
          شقق للبيع بالاسكندرية,
          ثلاث شقق للبيع,
          شقق للبيع لطف الله الفيوم ثانية بثانية,
          شقق للبيع في الفيوم ثانيه بثانيه,
          شقق للبيع ثكنات المعادي,
          شقق للبيع ثروت الاسكندرية,
          شقق للبيع ثلاث غرف,
          شقق للبيع ثروات ابها,
          شقق ثلاث غرف للبيع في جده,
          شقق للبيع في ثكنات المعادي,
          شقق للبيع في ثول,
          شقق للبيع ثادق,
          شقه للبيع ثلاث غرف,
          شقق للبيع دار مصر الاندلس 130 مرحلة ثانية,
          شقة للبيع ثول,
          شقق للبيع في ثروت الإسكندرية,
          شقق للبيع الغردقة ثلاث غرف نوم,
          شقة للبيع تاني نمرة من شارع الهرم,
          شقق للبيع في مدينة نصر,
          جاردينيا شقق للبيع,
          شقق للبيع جسر السويس الجديدة,
          حي العارض شقق للبيع,
          شقق للبيع جاردينيا سيتي,
          شقق للبيع جاردينيا طريق السويس,
          شقق للبيع جسر السويس,
          شقق للبيع جاردينيا هايتس,
          شقق للبيع جسر السويس الزيتون,
          شقق للبيع جنوب الاكاديمية,
          شقق للبيع جاردينيا التجمع,
          شقق للبيع جامع الفتح مصر الجديدة,
          جريدة الوسيط شقق للبيع في مدينة القناطر الخيرية,
          شقق للبيع جاردن سيتي,
          جروب شقق للبيع بالاسكندرية,
          جروب شقق للبيع بالاسكندرية السيوف,
          جروب الخانكة شقق للبيع,
          جزيرة مريم شقق للبيع,
          جديدة عرطوز شقق للبيع,
          جاردينيا شقق للبيع جدة,
          جديدة عرطوز الفضل شقق للبيع,
          جورجيا شقق للبيع,
          شقق للبيع تمويل عقاري المعادي,
          شقق للبيع تمويل عقاري,
          بالتجمع الخامس شقق للبيع,
          شقق للبيع بالتجمع الثالث 100 متر,
          شقق للبيع بالتجمع الاول,
          بسماية شقق للبيع,
          بيروت شقق للبيع,
          بالاسكندرية بالتقسيط شقق للبيع بالاسكندرية,
          بوابة العراق شقق للبيع,
          بالفيوم شقق للبيع,
          بسلا شقق للبيع,
          باكادير شقق للبيع,
          شقق للبيع بنظام التمويل العقاري 2021,
          بالمعادي شقق للبيع,
          بالاسكندرية سيدي بشر شقق للبيع,
          شقق للبيع التجمع الخامس,
          شقق للبيع التجمع الاول,
          شقق للبيع الرحاب,
          شقق للبيع العبور,
          شقق للبيع المقطم,
          شقق للبيع التجمع الثالث,
          شقق للبيع بمدينة نصر,
          شقق للبيع بسعر رخيص في القاهرة,
          شقق للبيع تصلح تمويل عقارى,
          تطبيق عقار حائل شقق للبيع,
          حدائق المعادي شقق للبيع,
          شقق للبيع تاج سلطان,
          شقق للبيع تقسيط,
          شقق للبيع ترعة الجبل المطرية,
          شقق للبيع تمويل عقاري بمدينة نصر,
          شقق للبيع تاج سيتي,
          شقق للبيع تمليك بمدينة جسر السويس الجديدة جمعية امنحتب,
          شقق للبيع تمويل عقارى بالشروق,
          تيط مليل شقق للبيع,
          شقق للبيع بالشروق,
          تركيا شقق للبيع,
          تاج سلطان شقق للبيع,
          تعاونيات سموحة شقق للبيع,
          تلاع العلي شقق للبيع,
          تاج سيتي شقق للبيع,
          تمويل عقاري شقق للبيع,
          تبوك شقق للبيع,
          تايلاند شقق للبيع,
          شقق للبيع بالتجمع الخامس,
          حدائق حلوان شقق للبيع,
          حدائق الاهرام شقق للبيع,
          حراج شقق للبيع شمال الرياض,
          شقق للبيع في كمبوند ذا ايكون,
          شقق للبيع في كمبوند ذا ادرس الشيخ زايد,
          ذا سكوير شقق للبيع,
          سعر المتر في العاصمة الإدارية الجديدة,
          ارخص سعر في العاصمة الإدارية الجديدة,
          شقق للبيع في العاصمة الإدارية,
          شقق العاصمة الإدارية الجديدة للموظفين,
          شقق العاصمة الإدارية الجديدة للعاملين بالخارج,
          كيف اشتري شقة في العاصمة الإدارية الجديدة`}
    ]);

}


}