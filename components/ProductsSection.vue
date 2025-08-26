<template>
    <div class="container mx-auto max-w-[1384px]">
        <div class="grid grid-cols-1  md:grid-cols-3  gap-y-8   md:gap-y-14 gap-x-6 lg:gap-x-12">
            <div class="flex flex-col gap-y-8   md:gap-y-14">
                <ProductCard v-for="product in Products[ProductFilter][2]" :key="product.title" :title="product.title"
                    :img="product.img" />
            </div>
            <div class="flex flex-col gap-y-8   md:gap-y-14">
                <ProductCard v-for="product in Products[ProductFilter][1]" :key="product.title" :title="product.title"
                    :img="product.img" />
            </div>
            <div class="flex flex-col gap-y-8   md:gap-y-14">
                <ProductCard v-for="product in Products[ProductFilter][0]" :key="product.title" :title="product.title"
                    :img="product.img" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductCard from './Utils/ProductCard.vue';

type ProductItem = {
    title: string;
    img: string;
};

type ProductCategory = ProductItem[][];

type ProductsType = {
    PrintCollaterals: ProductCategory;
    // زود باقي الأقسام بنفس الشكل
};
defineProps<{
    ProductFilter: keyof ProductsType;
}>();

//Black Print Collaterals 
import PrintCollateralsBOne from "../assets/img/Products/PrintCollaterals/PrintCollateralsBOne.webp"
import PrintCollateralsBTwo from "../assets/img/Products/PrintCollaterals/PrintCollateralsBTwo.webp"
import PrintCollateralsBthree from "../assets/img/Products/PrintCollaterals/PrintCollateralsBthree.webp"
import PrintCollateralsBFour from "../assets/img/Products/PrintCollaterals/PrintCollateralsBFour.webp"
import PrintCollateralsBFive from "../assets/img/Products/PrintCollaterals/PrintCollateralsBFive.webp"
import PrintCollateralsBSix from "../assets/img/Products/PrintCollaterals/PrintCollateralsBSix.webp"

// Yellow  Print Collaterals 
import PrintCollateralsYOne from "../assets/img/Products/PrintCollaterals/PrintCollateralsYOne.webp"
import PrintCollateralsYTwo from "../assets/img/Products/PrintCollaterals/PrintCollateralsYTwo.webp"
import PrintCollateralsYThree from "../assets/img/Products/PrintCollaterals/PrintCollateralsYThree.webp"
import PrintCollateralsYFour from "../assets/img/Products/PrintCollaterals/PrintCollateralsYFour.webp"
import PrintCollateralsYFive from "../assets/img/Products/PrintCollaterals/PrintCollateralsYFive.webp"
import PrintCollateralsYSix from "../assets/img/Products/PrintCollaterals/PrintCollateralsYSix.webp"

// White  Print Collaterals 
import PrintCollateralsWOne from "../assets/img/Products/PrintCollaterals/PrintCollateralsWOne.webp"
import PrintCollateralsWTwo from "../assets/img/Products/PrintCollaterals/PrintCollateralsWTwo.webp"
import PrintCollateralsWThree from "../assets/img/Products/PrintCollaterals/PrintCollateralsWThree.webp"
import PrintCollateralsWFour from "../assets/img/Products/PrintCollaterals/PrintCollateralsWFour.webp"
import PrintCollateralsWFive from "../assets/img/Products/PrintCollaterals/PrintCollateralsWFive.webp"
import PrintCollateralsWSix from "../assets/img/Products/PrintCollaterals/PrintCollateralsWSix.webp"


// Black Print CollateralsTwo 
import PrintCollaterals2Bone from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Bone.webp"
import PrintCollaterals2Btwo from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Btwo.webp"
import PrintCollaterals2Bthree from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Bthree.webp"
import PrintCollaterals2Bfour from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Bfour.webp"
import PrintCollaterals2Bfive from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Bfive.webp"
import PrintCollaterals2Bsix from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Bsix.webp"

// Yellow  Print CollateralsTwo 
import PrintCollaterals2Yone from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Yone.webp"
import PrintCollaterals2YTwo from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Ytwo.webp"
import PrintCollaterals2YThree from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Ythree.webp"
import PrintCollaterals2YFour from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Yfour.webp"
import PrintCollaterals2YFive from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Yfive.webp"
import PrintCollaterals2YSix from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Ysix.webp"

// White  Print CollateralsTwo 
import PrintCollaterals2WOne from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Wone.webp"
import PrintCollaterals2WTwo from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Wtwo.webp"
import PrintCollaterals2WThree from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Wthree.webp"
import PrintCollaterals2WFour from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Wfour.webp"
import PrintCollaterals2WFive from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Wfive.webp"
import PrintCollaterals2WSix from "../assets/img/Products/PrintCollateralsTwo/PrintCollaterals2Wsix.webp"



// Black Print BillboardDesigns 
import BillboardDesignsBone from "../assets/img/Products/BillboardDesigns/BillboardDesignsBOne.webp"
import BillboardDesignsBtwo from "../assets/img/Products/BillboardDesigns/BillboardDesignsBTwo.webp"
import BillboardDesignsBthree from "../assets/img/Products/BillboardDesigns/BillboardDesignsBThree.webp"
import BillboardDesignsBfour from "../assets/img/Products/BillboardDesigns/BillboardDesignsBFour.webp"
import BillboardDesignsBfive from "../assets/img/Products/BillboardDesigns/BillboardDesignsBFive.webp"
import BillboardDesignsBsix from "../assets/img/Products/BillboardDesigns/BillboardDesignsBSix.webp"

// Yellow  Print BillboardDesigns 
import BillboardDesignsYone from "../assets/img/Products/BillboardDesigns/BillboardDesignsYone.webp"
import BillboardDesignsYTwo from "../assets/img/Products/BillboardDesigns/BillboardDesignsYtwo.webp"
import BillboardDesignsYThree from "../assets/img/Products/BillboardDesigns/BillboardDesignsYThree.webp"
import BillboardDesignsYFour from "../assets/img/Products/BillboardDesigns/BillboardDesignsYfour.webp"
import BillboardDesignsYFive from "../assets/img/Products/BillboardDesigns/BillboardDesignsYfive.webp"
import BillboardDesignsYSix from "../assets/img/Products/BillboardDesigns/BillboardDesignsYSix.webp"

// White  Print BillboardDesigns 
import BillboardDesignsWOne from "../assets/img/Products/BillboardDesigns/BillboardDesignsWone.webp"
import BillboardDesignsWTwo from "../assets/img/Products/BillboardDesigns/BillboardDesignsWtwo.webp"
import BillboardDesignsWThree from "../assets/img/Products/BillboardDesigns/BillboardDesignsWThree.webp"
import BillboardDesignsWFour from "../assets/img/Products/BillboardDesigns/BillboardDesignsWfour.webp"
import BillboardDesignsWFive from "../assets/img/Products/BillboardDesigns/BillboardDesignsWfive.webp"
import BillboardDesignsWSix from "../assets/img/Products/BillboardDesigns/BillboardDesignsWsix.webp"


// Black Print PackagingPaperBags 
import PackagingPaperBagsBOne from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsBOne.webp"
import PackagingPaperBagsBTwo from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsBTwo.webp"
import PackagingPaperBagsBThree from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsBThree.webp"

// Yellow  Print PackagingPaperBags 
import PackagingPaperBagsYOne from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsYOne.webp"
import PackagingPaperBagsYTwo from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsYTwo.webp"
import PackagingPaperBagsYThree from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsYThree.webp"

// White  Print PackagingPaperBags 
import PackagingPaperBagsWOne from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsWOne.webp"
import PackagingPaperBagsWTwo from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsWTwo.webp"
import PackagingPaperBagsWThree from "../assets/img/Products/PackagingPaperBags/PackagingPaperBagsWThree.webp"


// Black Print DiversePrintMaterials 
import DiversePrintMaterialsBOne from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialsBOne.webp"
import DiversePrintMaterialsBTwo from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialsBTwo.webp"
import DiversePrintMaterialsBThree from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialsBThree.webp"
import DiversePrintMaterialsBFour from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialsBFour.webp"

// Yellow  Print PackagingPaperBags 
import DiversePrintMaterialsYOne from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialYOne.webp"
import DiversePrintMaterialsYTwo from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialYTwo.webp"
import DiversePrintMaterialsYThree from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialYThree.webp"
import DiversePrintMaterialsYFour from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialYFour.webp"

// White  Print PackagingPaperBags 
import DiversePrintMaterialsWOne from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialWOne.webp"
import DiversePrintMaterialsWTwo from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialWTwo.webp"
import DiversePrintMaterialsWThree from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialWThree.webp"
import DiversePrintMaterialsWFour from "../assets/img/Products/DiversePrintMaterials/DiversePrintMaterialWFour.webp"


const Products = {
    PrintCollaterals: [
        [
            {
                title: "أساور ورقية",
                img: PrintCollateralsBOne
            },
            {
                title: 'بروش ',
                img: PrintCollateralsBTwo
            },
            {
                title: 'تاج نيم',
                img: PrintCollateralsBthree
            },
            {
                title: 'بوست كارد a6',
                img: PrintCollateralsBFour
            },
            {
                title: 'فلير a5 ',
                img: PrintCollateralsBFive
            },
            {
                title: 'فلير a4',
                img: PrintCollateralsBSix
            },
            {
                title: 'كارت تكتشر ',
                img: PrintCollaterals2Bone
            },
            {
                title: '  تاج ورقى ',
                img: PrintCollaterals2Btwo
            },

            {
                title: 'كارت كوتد ',
                img: PrintCollaterals2Bfour
            },
            {
                title: 'كارت شخصى أيس',
                img: PrintCollaterals2Bthree
            },
            {
                title: 'الخطابات',
                img: PrintCollaterals2Bsix
            },
            {
                title: 'الملفات (جيب أبيض )',
                img: PrintCollaterals2Bfive
            },

        ],
        [
            {
                title: "أساور ورقية",
                img: PrintCollateralsYOne
            },
            {
                title: "بروش ",
                img: PrintCollateralsYTwo
            },
            {
                title: "تاج نيم",
                img: PrintCollateralsYThree
            },
            {
                title: "بوست كارد",
                img: PrintCollateralsYFour
            },
            {
                title: "فلير a5",
                img: PrintCollateralsYFive
            },
            {
                title: 'فلير a4 ',
                img: PrintCollateralsYSix
            },

            {
                title: "كارت تكتشر",
                img: PrintCollaterals2YTwo
            }, {
                title: "تاج ورقى ",
                img: PrintCollaterals2Yone
            },

            {
                title: 'كارت كوتد',
                img: PrintCollaterals2YFour
            },
            {
                title: "كارت شخصى آيس",
                img: PrintCollaterals2YThree
            },
            {
                title: "الخطابات",
                img: PrintCollaterals2YFive
            },
            {
                title: "فولدر جيبين",
                img: PrintCollaterals2YSix
            },
        ],
        [
            {
                title: 'أساور ورقية ',
                img: PrintCollateralsWFive
            },
            {
                title: "بروش  ",
                img: PrintCollateralsWFour
            },
            {
                title: "تاج نيم ",
                img: PrintCollateralsWSix
            },
            {
                title: "بوست كارد ",
                img: PrintCollateralsWOne
            },
            {
                title: "فلير a5",
                img: PrintCollateralsWTwo
            },
            {
                title: "فلير a4",
                img: PrintCollateralsWThree
            },
            {
                title: 'كارت تكتشر ',
                img: PrintCollaterals2WOne
            },
            {
                title: 'تاج ورقى ',
                img: PrintCollaterals2WTwo
            },
            {
                title: ' كارت كوتد  ',
                img: PrintCollaterals2WSix
            },
            {
                title: 'كارت ايس',
                img: PrintCollaterals2WThree
            },
            {
                title: ' الخطابات    ',
                img: PrintCollaterals2WFour
            },
            {
                title: 'الملفات',
                img: PrintCollaterals2WFive
            },
        ]
    ],
    DiversePrintMaterials: [
        [
            {
                title: 'ستيكرز ورقية',
                img: DiversePrintMaterialsBOne
            },
            {
                title: 'الاختام',
                img: DiversePrintMaterialsBFour
            },
            {
                title: 'شرائط',
                img: DiversePrintMaterialsBTwo
            },
            {
                title: 'بطاقة تعريف',
                img: DiversePrintMaterialsBThree
            },

        ],
        [
            {
                title: 'ستيكرز بلاستيك',
                img: DiversePrintMaterialsYOne
            },
            {
                title: 'اختام',
                img: DiversePrintMaterialsYTwo
            },
            {
                title: 'شرائط',
                img: DiversePrintMaterialsYFour
            },
            {
                title: 'بطاقة تعريف ',
                img: DiversePrintMaterialsYThree
            },


        ],
        [
            {
                title: 'ستيكرز',
                img: DiversePrintMaterialsWOne
            },
            {
                title: 'اختام',
                img: DiversePrintMaterialsWThree
            },
            {
                title: 'شرائط',
                img: DiversePrintMaterialsWFour
            },
            {
                title: 'بطاقة تعريف',
                img: DiversePrintMaterialsWTwo
            },


        ]
    ],
    PackagingPaperBags: [
        [
            {
                title: 'ورق تغليف ',
                img: PackagingPaperBagsBOne
            },
            {
                title: 'اكياس ورقية ',
                img: PackagingPaperBagsBTwo
            },
            {
                title: 'ورق طاولة ',
                img: PackagingPaperBagsBThree
            },
        ],
        [

            {
                title: 'ورق تغليف ',
                img: PackagingPaperBagsYTwo
            },
            {
                title: 'اكياس ورقية ',
                img: PackagingPaperBagsYOne
            },
            {
                title: 'ورق طاولة ',
                img: PackagingPaperBagsYThree
            }
        ],
        [


            {
                title: 'ورق تغليف ',
                img: PackagingPaperBagsWOne
            },
            {
                title: 'اكياس ورقية ',
                img: PackagingPaperBagsWTwo
            },
            {
                title: 'ورق طاولة ',
                img: PackagingPaperBagsWThree
            },
        ]
    ],
    Billboards: [
        [
            {
                title: 'فوركس ',
                img: BillboardDesignsBone
            },
            {
                title: 'بوب اب ستاند ',
                img: BillboardDesignsBtwo
            },
            {
                title: 'أكريلك',
                img: BillboardDesignsBthree
            },
            {
                title: 'رول اب ',
                img: BillboardDesignsBfour
            },
            {
                title: 'كانفاس ',
                img: BillboardDesignsBfive
            },
            {
                title: 'بوسترز ',
                img: BillboardDesignsBsix
            },
        ],
        [
            {
                title: 'فوركس ',
                img: BillboardDesignsYFour
            },
            {
                title: 'بوب اب ستاند',
                img: BillboardDesignsYFive
            },
            {
                title: 'أكريلك',
                img: BillboardDesignsYTwo
            },
            {
                title: 'رول اب ',
                img: BillboardDesignsYSix
            },
            {
                title: 'كانفاس ',
                img: BillboardDesignsYone
            },

            {
                title: 'بوسترز ',
                img: BillboardDesignsYThree
            },
        ],
        [
            {
                title: 'رول اب ',
                img: BillboardDesignsWFour
            },
            {
                title: 'كانفاس ',
                img: BillboardDesignsWTwo
            },
            {
                title: 'بوسترز ',
                img: BillboardDesignsWOne
            },

            {
                title: 'فوركس ',
                img: BillboardDesignsWThree
            },
            {
                title: 'بوب اب ستاند ',
                img: BillboardDesignsWFive
            },

            {
                title: 'أكريلك',
                img: BillboardDesignsWSix
            },





        ]
    ],
}




</script>

<style scoped></style>
