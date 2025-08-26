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
                title: 'بروش 1',
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
                title: 'كارت تكتشر 2',
                img: PrintCollaterals2Bone
            },
            {
                title: '  تاج ورقى3 ',
                img: PrintCollaterals2Btwo
            },
            {
                title: 'كارت شخصى أيس',
                img: PrintCollaterals2Bthree
            },
            {
                title: 'كارت كوتد 2',
                img: PrintCollaterals2Bfour
            },
            {
                title: 'الملفات (جيب أبيض )',
                img: PrintCollaterals2Bfive
            },
            {
                title: 'الخطابات',
                img: PrintCollaterals2Bsix
            },
        ],
        [
            {
                title: "أساور ورقية2",
                img: PrintCollateralsYOne
            },
            {
                title: "بروش 3",
                img: PrintCollateralsYTwo
            },
            {
                title: "تاج نيم2",
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
                title: "تاج ورقى 2",
                img: PrintCollaterals2Yone
            },
            {
                title: "كارت تكتشر",
                img: PrintCollaterals2YTwo
            },
            {
                title: "كارت شخصى آيس",
                img: PrintCollaterals2YThree
            },
            {
                title: 'كارت كوتد',
                img: PrintCollaterals2YFour
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
                title: "بوست كارد 1",
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
                title: "بروش 2 ",
                img: PrintCollateralsWFour
            },
            {
                title: 'أساور ورقية 1',
                img: PrintCollateralsWFive
            },
            {
                title: "تاج نيم 1",
                img: PrintCollateralsWSix
            },

            {
                title: 'كارت تكتشر1 ',
                img: PrintCollaterals2WOne
            },
            {
                title: 'تاج ورقى 1',
                img: PrintCollaterals2WTwo
            },
            {
                title: 'كارت ايس',
                img: PrintCollaterals2WThree
            },
            {
                title: ' الخطابات 1   ',
                img: PrintCollaterals2WFour
            },
            {
                title: 'الملفات',
                img: PrintCollaterals2WFive
            },
            {
                title: ' كارت كوتد 3 ',
                img: PrintCollaterals2WSix
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
                title: 'شرائط2',
                img: DiversePrintMaterialsBTwo
            },
            {
                title: 'بطاقة تعريف1',
                img: DiversePrintMaterialsBThree
            },
            {
                title: 'الاختام1',
                img: DiversePrintMaterialsBFour
            },
        ],
        [
            {
                title: 'ستيكرز بلاستيك',
                img: DiversePrintMaterialsYOne
            },
            {
                title: 'اختام3',
                img: DiversePrintMaterialsYTwo
            },
            {
                title: 'بطاقة تعريف 2',
                img: DiversePrintMaterialsYThree
            },
            {
                title: '1شرائط',
                img: DiversePrintMaterialsYFour
            },

        ],
        [
            {
                title: 'ستيكرز',
                img: DiversePrintMaterialsWOne
            },
            {
                title: 'بطاقة تعريف3',
                img: DiversePrintMaterialsWTwo
            },
            {
                title: 'اختام2',
                img: DiversePrintMaterialsWThree
            },
            {
                title: 'شرائط3',
                img: DiversePrintMaterialsWFour
            },
        ]
    ],

    PackagingPaperBags: [
        [
            {
                title: 'ورق تغليف 1',
                img: PackagingPaperBagsBOne
            },
            {
                title: 'اكياس ورقية 1',
                img: PackagingPaperBagsBTwo
            },
            {
                title: 'ورق طاولة 1',
                img: PackagingPaperBagsBThree
            },
        ],
        [
            {
                title: 'اكياس ورقية 3',
                img: PackagingPaperBagsYOne
            },
            {
                title: 'ورق تغليف 2',
                img: PackagingPaperBagsYTwo
            },
            {
                title: 'ورق طاولة 2',
                img: PackagingPaperBagsYThree
            }
        ],
        [
            {
                title: 'ورق تغليف 3',
                img: PackagingPaperBagsWOne
            },
            {
                title: 'اكياس ورقية 2',
                img: PackagingPaperBagsWTwo
            },
            {
                title: 'ورق طاولة 3',
                img: PackagingPaperBagsWThree
            },
        ]
    ],

    Billboards: [
        [
            {
                title: 'فوركس 3',
                img: BillboardDesignsBone
            },
            {
                title: 'بوب اب ستاند 3',
                img: BillboardDesignsBtwo
            },
            {
                title: '1أكريلك',
                img: BillboardDesignsBthree
            },
            {
                title: 'رول اب 3',
                img: BillboardDesignsBfour
            },
            {
                title: 'كانفاس 3',
                img: BillboardDesignsBfive
            },
            {
                title: 'بوسترز 3',
                img: BillboardDesignsBsix
            },
        ],
        [
            {
                title: 'كانفاس 2',
                img: BillboardDesignsYone
            },
            {
                title: 'أكريلك2',
                img: BillboardDesignsYTwo
            },
            {
                title: 'بوسترز 2',
                img: BillboardDesignsYThree
            },
            {
                title: 'فوركس 2',
                img: BillboardDesignsYFour
            },
            {
                title: 'بوب اب ستاند2',
                img: BillboardDesignsYFive
            },
            {
                title: 'رول اب 2',
                img: BillboardDesignsYSix
            },

        ],
        [
            {
                title: 'بوسترز 1',
                img: BillboardDesignsWOne
            },
            {
                title: 'كانفاس 1',
                img: BillboardDesignsWTwo
            },
            {
                title: 'فوركس 1',
                img: BillboardDesignsWThree
            },
            {
                title: 'رول اب 1',
                img: BillboardDesignsWFour
            },
            {
                title: 'بوب اب ستاند 1',
                img: BillboardDesignsWFive
            },
            {
                title: 'أكريلك3',
                img: BillboardDesignsWSix
            },
        ]
    ],
}




</script>

<style scoped></style>
