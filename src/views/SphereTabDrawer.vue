<template>
    <div class="sphereTab-drawer">
        <el-drawer v-model="isSphere" :with-header="false" direction="ttb" :close-on-click-modal="false"
            :before-close="handleClose" size='100%'>
            <div class="my-header">
                <div class="top-left">
                    <div class="name-Inp">
                        <el-input v-model="nameValue" size="small" placeholder="输入国家回车检索"
                            @keyup.enter="enterSearch(nameValue)" style="--el-input-border-radius: 0px;" />
                    </div>
                    <el-button class="btn" @click="clickXlsxBtn" :color="dvColor[0]">
                        <img :src=xlsxImg />
                        全球数据下载
                    </el-button>
                </div>
                <el-icon :size="40" @click="handleClose" class="close-icon" :color="dvColor[0]">
                    <Close />
                </el-icon>
            </div>
            <!--表格-->
            <el-table :data="tabData" style="width: 100%;height: calc(100vh - 100px);
            --el-table-bg-color:rgba(0,0,0,.8);
            --el-table-tr-bg-color:transparent;
            --el-table-header-bg-color:#333;
            --el-table-header-text-color:#fff;
            --el-table-text-color:#fff;
            --el-table-row-hover-bg-color:#333;
            --el-table-border-color:#333">
                <el-table-column type="index" label="序号" width="100" />
                <el-table-column prop="name" label="国家" />
                <el-table-column prop="value" label="累计数" sortable />
                <el-table-column prop="deathNum" label="死亡数" sortable />
                <el-table-column prop="cureNum" label="治愈数" sortable />
                <el-table-column prop="citycode" label="地区代码" />
                <el-table-column label="坐标">
                    <template #default="scope">{{ scope.row.position ? scope.row.position : "-" }}</template>
                </el-table-column>
            </el-table>

        </el-drawer>
    </div>
</template>

<script lang='ts' setup>
import { ref, computed, watch, onMounted } from 'vue';
import xlsxImg from "@/assets/img/xlsx.png";
import downloadXlsx from "@/utils/xlsxUtils"
let props = defineProps({
    isSphere: {
        type: Boolean,
        default: false
    },
    sphereData: {
        type: Array,
        default: [],
    },
    dvColor: {
        default: []
    }
}),
    nameValue = ref(""),//检索名字
    isSphere = ref(false),
    tabData: any = ref([]),//表格数据
    emits = defineEmits(["close"]);

watch(
    () => props.isSphere,
    (val) => {
        if (val) {
            isSphere.value = val;
            tabData.value = props.sphereData;//打开表格后赋值数据
        }
    },
)

//关闭对话框
function handleClose() {
    isSphere.value = false;
    emits("close");
};

//回车检索
function enterSearch(matchStr: string) {
    if (matchStr == "") {
        tabData.value = props.sphereData;//获取所有数据
        return;
    }
    tabData.value = [];//置空表格数据
    props.sphereData.forEach((s: any) => {
        if (s.name.search(matchStr) >= 0) {
            tabData.value.push(s);
        }
    })
};

//导出数据表格
function clickXlsxBtn() {
    if (confirm("确认下载全球疫情数据？")) {
        let tabObj = {
            fileName: "各国疫情数据",
            tabHead: ["国家", "累计数", "死亡数", "治愈数", "地区代码", "坐标"],
            keyList: ["name", "value", "deathNum", "cureNum", "citycode", "position"],
            tabData: tabData.value
        };
        downloadXlsx(tabObj);
    }
};

</script>

<style lang="scss" scoped>
.sphereTab-drawer {
    --el-bg-color: rgba(0, 0, 0, 0);

    .my-header {
        color: #fff;
        padding: 0px 10px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        background-color: #000;

        .top-left {
            display: flex;

            p {
                font-weight: 900;
                font-size: 25px;
                margin: auto 0px;
                color: #fff;
            }

            .name-Inp {
                margin: auto 20px;
                margin-left: 20px;
                width: 200px;
            }

            .btn {
                margin: auto;
                border: none;
                color: #fff;
                padding: 0px 10px;
                border-radius: 0px;

                img {
                    height: 20px;
                    margin-right: 10px;
                }
            }
        }

        .close-icon {
            margin: auto 0px;
            transition: all 0.3s linear;

            &:hover {
                color: #fff;
                transform: rotateZ(180deg);
                cursor: pointer;
            }
        }
    }
}
</style>