//ブキデータ
const weapons= [
    { name: 'スプラシューター' , main: 'シューター' , sub: 'クイックボム' , sp: 'スーパーチャクチ' },
    { name: 'スプラシューターコラボ' , main: 'シューター' , sub: 'スプラッシュボム' , sp: 'ジェットパック' },
    { name: 'スプラシューターベッチュー' , main: 'シューター' , sub: 'キューバンボム' , sp: 'マルチミサイル' },
    { name: 'プライムシューター' , main: 'シューター' , sub: 'ポイントセンサー' , sp: 'アメフラシ' },
    { name: 'プライムシューターコラボ' , main: 'シューター' , sub: 'キューバンボム' , sp: 'バブルランチャー' },
    { name: 'プライムシューターベッチュー' , main: 'シューター' , sub: 'スプラッシュボム' , sp: 'ナイスダマ' },
    { name: 'シャープマーカー' , main: 'シューター' , sub: 'ポイズンミスト' , sp: 'ジェットパック' },
    { name: 'シャープマーカーネオ' , main: 'シューター' , sub: 'クイックボム' , sp: 'ボムピッチャー' },
    { name: 'わかばシューター' , main: 'シューター' , sub: 'スプラッシュボム' , sp: 'インクアーマー' },
    { name: 'もみじシューター' , main: 'シューター' , sub: 'ロボットボム' , sp: 'アメフラシ' },
    { name: 'おちばシューター' , main: 'シューター' , sub: 'トーピード' , sp: 'バブルランチャー' },
    { name: 'プロモデラーMG(銀)' , main: 'シューター' , sub: 'キューバンボム' , sp: 'ボムピッチャー' },
    { name: 'プロモデラーRG(金)' , main: 'シューター' , sub: 'スプリンクラー' , sp: 'イカスフィア' },
    { name: 'プロモデラーPG(銅)' , main: 'シューター' , sub: 'クイックボム' , sp: 'ナイスダマ' },
    { name: 'N-ZAP85(黒)' , main: 'シューター' , sub: 'キューバンボム' , sp: 'インクアーマー' },
    { name: 'N-ZAP89(赤)' , main: 'シューター' , sub: 'ロボットボム' , sp: 'マルチミサイル' },
    { name: 'N-ZAP83(ファミ)' , main: 'シューター' , sub: 'スプリンクラー' , sp: 'アメフラシ' },
    { name: '.52ガロン' , main: 'シューター' , sub: 'ポイントセンサー' , sp: 'イカスフィア' },
    { name: '.52ガロンデコ' , main: 'シューター' , sub: 'カーリングボム' , sp: 'ハイパープレッサー' },
    { name: '.52ガロンベッチュー' , main: 'シューター' , sub: 'スプラッシュシールド' , sp: 'ナイスダマ' },
    { name: 'ジェットスイーパー' , main: 'シューター' , sub: 'ポイズンミスト' , sp: 'マルチミサイル' },
    { name: 'ジェットスイーパーカスタム' , main: 'シューター' , sub: 'クイックボム' , sp: 'ハイパープレッサー' },
    { name: 'L3リールガン' , main: 'シューター' , sub: 'カーリングボム' , sp: 'イカスフィア' },
    { name: 'L3リールガンD' , main: 'シューター' , sub: 'クイックボム' , sp: 'ジェットパック' },
    { name: 'L3リールガンベッチュー' , main: 'シューター' , sub: 'スプラッシュシールド' , sp: 'ウルトラハンコ' },
    { name: '.96ガロン' , main: 'シューター' , sub: 'スプリンクラー' , sp: 'インクアーマー' },
    { name: '.96ガロンデコ' , main: 'シューター' , sub: 'スプラッシュシールド' , sp: 'スーパーチャクチ' },
    { name: 'H3リールガン' , main: 'シューター' , sub: 'ポイントセンサー' , sp: 'マルチミサイル' },
    { name: 'H3リールガンD' , main: 'シューター' , sub: 'キューバンボム' , sp: 'インクアーマー' },
    { name: 'H3リールガンチェリー' , main: 'シューター' , sub: 'スプラッシュシールド' , sp: 'バブルランチャー' },
    { name: 'ボールドマーカー' , main: 'シューター' , sub: 'カーリングボム' , sp: 'スーパーチャクチ' },
    { name: 'ボールドマーカーネオ' , main: 'シューター' , sub: 'ジャンプビーコン' , sp: 'マルチミサイル' },
    { name: 'ボールドマーカー7' , main: 'シューター' , sub: 'スプラッシュボム' , sp: 'ウルトラハンコ' },
    { name: 'ボトルガイザー' , main: 'シューター' , sub: 'スプラッシュシールド' , sp: 'ハイパープレッサー' },
    { name: 'ボトルガイザーフォイル' , main: 'シューター' , sub: 'スプラッシュボム' , sp: 'バブルランチャー' },
    { name: 'ホットブラスター' , main: 'ブラスター' , sub: 'ポイズンミスト' , sp: 'スーパーチャクチ' },
    { name: 'ホットブラスターカスタム' , main: 'ブラスター' , sub: 'ロボットボム' , sp: 'ジェットパック' },
    { name: 'ラピッドブラスター' , main: 'ブラスター' , sub: 'トラップ' , sp: 'ボムピッチャー' },
    { name: 'ラピッドブラスターデコ' , main: 'ブラスター' , sub: 'キューバンボム' , sp: 'ジェットパック' },
    { name: 'ラピッドブラスターベッチュー' , main: 'ブラスター' , sub: 'トーピード' , sp: 'イカスフィア' },
    { name: 'ノヴァブラスター' , main: 'ブラスター' , sub: 'スプラッシュボム' , sp: 'イカスフィア' },
    { name: 'ノヴァブラスターネオ' , main: 'ブラスター' , sub: 'トラップ' , sp: 'ボムピッチャー' },
    { name: 'ノヴァブラスターベッチュー' , main: 'ブラスター' , sub: 'タンサンボム' , sp: 'アメフラシ' },
    { name: 'クラッシュブラスター' , main: 'ブラスター' , sub: 'スプラッシュボム' , sp: 'ハイパープレッサー' },
    { name: 'クラッシュブラスターネオ' , main: 'ブラスター' , sub: 'カーリングボム' , sp: 'マルチミサイル' },
    { name: 'Rブラスターエリート' , main: 'ブラスター' , sub: 'ポイズンミスト' , sp: 'アメフラシ' },
    { name: 'Rブラスターエリートデコ' , main: 'ブラスター' , sub: 'スプラッシュシールド' , sp: 'インクアーマー' },
    { name: 'ロングブラスター' , main: 'ブラスター' , sub: 'キューバンボム' , sp: 'アメフラシ' },
    { name: 'ロングブラスターカスタム' , main: 'ブラスター' , sub: 'カーリングボム' , sp: 'バブルランチャー' },
    { name: 'ロングブラスターネクロ' , main: 'ブラスター' , sub: 'クイックボム' , sp: 'マルチミサイル' },
    { name: 'スプラローラー' , main: 'ローラー' , sub: 'カーリングボム' , sp: 'スーパーチャクチ' },
    { name: 'スプラローラーコラボ' , main: 'ローラー' , sub: 'ジャンプビーコン' , sp: 'イカスフィア' },
    { name: 'スプラローラーベッチュー' , main: 'ローラー' , sub: 'スプラッシュボム' , sp: 'バブルランチャー' },
    { name: 'ダイナモローラー' , main: 'ローラー' , sub: 'トラップ' , sp: 'ハイパープレッサー' },
    { name: 'ダイナモローラーテスラ' , main: 'ローラー' , sub: 'スプラッシュボム' , sp: 'インクアーマー' },
    { name: 'ダイナモローラーベッチュー' , main: 'ローラー' , sub: 'スプリンクラー' , sp: 'ナイスダマ' },
    { name: 'カーボンローラー' , main: 'ローラー' , sub: 'ロボットボム' , sp: 'アメフラシ' },
    { name: 'カーボンローラーデコ' , main: 'ローラー' , sub: 'クイックボム' , sp: 'ボムピッチャー' },
    { name: 'ヴァリアブルローラー' , main: 'ローラー' , sub: 'スプラッシュシールド' , sp: 'ボムピッチャー' },
    { name: 'ヴァリアブルローラーフォイル' , main: 'ローラー' , sub: 'キューバンボム' , sp: 'マルチミサイル' },
    { name: 'ホクサイ' , main: 'フデ' , sub: 'ロボットボム' , sp: 'ジェットパック' },
    { name: 'ホクサイ・ヒュー' , main: 'フデ' , sub: 'ジャンプビーコン' , sp: 'マルチミサイル' },
    { name: 'ホクサイベッチュー' , main: 'フデ' , sub: 'キューバンボム' , sp: 'ウルトラハンコ' },
    { name: 'パブロ' , main: 'フデ' , sub: 'スプラッシュボム' , sp: 'スーパーチャクチ' },
    { name: 'パブロ・ヒュー' , main: 'フデ' , sub: 'トラップ' , sp: 'イカスフィア' },
    { name: 'パーマネント・パブロ' , main: 'フデ' , sub: 'スプリンクラー' , sp: 'インクアーマー' },
    { name: 'スプラチャージャー' , main: 'チャージャー' , sub: 'スプラッシュボム' , sp: 'ハイパープレッサー' },
    { name: 'スプラスコープ' , main: 'チャージャー' , sub: 'スプラッシュボム' , sp: 'ハイパープレッサー' },
    { name: 'スプラチャージャーコラボ' , main: 'チャージャー' , sub: 'スプラッシュシールド' , sp: 'ボムピッチャー' },
    { name: 'スプラスコープコラボ' , main: 'チャージャー' , sub: 'スプラッシュシールド' , sp: 'ボムピッチャー' },
    { name: 'スプラチャージャーベッチュー' , main: 'チャージャー' , sub: 'スプリンクラー' , sp: 'イカスフィア' },
    { name: 'スプラスコープベッチュー' , main: 'チャージャー' , sub: 'スプリンクラー' , sp: 'イカスフィア' },
    { name: 'リッター4K' , main: 'チャージャー' , sub: 'トラップ' , sp: 'アメフラシ' },
    { name: '4Kスコープ' , main: 'チャージャー' , sub: 'トラップ' , sp: 'アメフラシ' },
    { name: 'リッター4Kカスタム' , main: 'チャージャー' , sub: 'ジャンプビーコン' , sp: 'バブルランチャー' },
    { name: '4Kスコープカスタム' , main: 'チャージャー' , sub: 'ジャンプビーコン' , sp: 'バブルランチャー' },
    { name: 'ソイチューバー' , main: 'チャージャー' , sub: 'キューバンボム' , sp: 'スーパーチャクチ' },
    { name: 'ソイチューバーカスタム' , main: 'チャージャー' , sub: 'カーリングボム' , sp: 'ジェットパック' },
    { name: 'スクイックリンα' , main: 'チャージャー' , sub: 'ポイントセンサー' , sp: 'インクアーマー' },
    { name: 'スクイックリンβ' , main: 'チャージャー' , sub: 'ロボットボム' , sp: 'イカスフィア' },
    { name: 'スクイックリンγ' , main: 'チャージャー' , sub: 'キューバンボム' , sp: 'ジェットパック' },
    { name: '14式竹筒銃・甲' , main: 'チャージャー' , sub: 'カーリングボム' , sp: 'マルチミサイル' },
    { name: '14式竹筒銃・乙' , main: 'チャージャー' , sub: 'ポイズンミスト' , sp: 'ボムピッチャー' },
    { name: '14式竹筒銃・丙' , main: 'チャージャー' , sub: 'タンサンボム' , sp: 'バブルランチャー' },
    { name: 'バケットスロッシャー' , main: 'スロッシャー' , sub: 'キューバンボム' , sp: 'マルチミサイル' },
    { name: 'バケットスロッシャーデコ' , main: 'スロッシャー' , sub: 'スプリンクラー' , sp: 'イカスフィア' },
    { name: 'バケットスロッシャーソーダ' , main: 'スロッシャー' , sub: 'スプラッシュボム' , sp: 'ボムピッチャー' },
    { name: 'ヒッセン' , main: 'スロッシャー' , sub: 'クイックボム' , sp: 'インクアーマー' },
    { name: 'ヒッセン・ヒュー' , main: 'スロッシャー' , sub: 'スプラッシュボム' , sp: 'アメフラシ' },
    { name: 'スクリュースロッシャー' , main: 'スロッシャー' , sub: 'ロボットボム' , sp: 'ハイパープレッサー' },
    { name: 'スクリュースロッシャーネオ' , main: 'スロッシャー' , sub: 'ポイントセンサー' , sp: 'ボムピッチャー' },
    { name: 'スクリュースロッシャーベッチュー' , main: 'スロッシャー' , sub: 'タンサンボム' , sp: 'スーパーチャクチ' },
    { name: 'エクスプロッシャー' , main: 'スロッシャー' , sub: 'スプリンクラー' , sp: 'バブルランチャー' },
    { name: 'エクスプロッシャーカスタム' , main: 'スロッシャー' , sub: 'ポイントセンサー' , sp: 'イカスフィア' },
    { name: 'オーバーフロッシャー' , main: 'スロッシャー' , sub: 'スプラッシュシールド' , sp: 'アメフラシ' },
    { name: 'オーバーフロッシャーデコ' , main: 'スロッシャー' , sub: 'スプリンクラー' , sp: 'ボムピッチャー' },
    { name: 'バレルスピナー' , main: 'スピナー' , sub: 'スプリンクラー' , sp: 'ハイパープレッサー' },
    { name: 'バレルスピナーデコ' , main: 'スピナー' , sub: 'スプラッシュシールド' , sp: 'バブルランチャー' },
    { name: 'バレルスピナーリミックス' , main: 'スピナー' , sub: 'ポイントセンサー' , sp: 'ナイスダマ' },
    { name: 'スプラスピナー' , main: 'スピナー' , sub: 'クイックボム' , sp: 'マルチミサイル' },
    { name: 'スプラスピナーコラボ' , main: 'スピナー' , sub: 'カーリングボム' , sp: 'アメフラシ' },
    { name: 'スプラスピナーベッチュー' , main: 'スピナー' , sub: 'ポイズンミスト' , sp: 'ウルトラハンコ' },
    { name: 'ハイドラント' , main: 'スピナー' , sub: 'ロボットボム' , sp: 'スーパーチャクチ' },
    { name: 'ハイドラントカスタム' , main: 'スピナー' , sub: 'トラップ' , sp: 'インクアーマー' },
    { name: 'クーゲルシュライバー' , main: 'スピナー' , sub: 'ポイズンミスト' , sp: 'ジェットパック' },
    { name: 'クーゲルシュライバー・ヒュー' , main: 'スピナー' , sub: 'ジャンプビーコン' , sp: 'アメフラシ' },
    { name: 'ノーチラス47' , main: 'スピナー' , sub: 'ポイントセンサー' , sp: 'イカスフィア' },
    { name: 'ノーチラス79' , main: 'スピナー' , sub: 'キューバンボム' , sp: 'ジェットパック' },
    { name: 'スプラマニューバー' , main: 'マニューバー' , sub: 'クイックボム' , sp: 'マルチミサイル' },
    { name: 'スプラマニューバーコラボ' , main: 'マニューバー' , sub: 'カーリングボム' , sp: 'ジェットパック' },
    { name: 'スプラマニューバーベッチュー' , main: 'マニューバー' , sub: 'キューバンボム' , sp: 'イカスフィア' },
    { name: 'スパッタリー' , main: 'マニューバー' , sub: 'ジャンプビーコン' , sp: 'ボムピッチャー' },
    { name: 'スパッタリー・ヒュー' , main: 'マニューバー' , sub: 'ポイズンミスト' , sp: 'アメフラシ' },
    { name: 'スパッタリークリア' , main: 'マニューバー' , sub: 'トーピード' , sp: 'スーパーチャクチ' },
    { name: 'デュアルスイーパー' , main: 'マニューバー' , sub: 'ポイントセンサー' , sp: 'マルチミサイル' },
    { name: 'デュアルスイーパーカスタム' , main: 'マニューバー' , sub: 'スプラッシュボム' , sp: 'アメフラシ' },
    { name: 'ケルビン525' , main: 'マニューバー' , sub: 'トラップ' , sp: 'ジェットパック' },
    { name: 'ケルビン525デコ' , main: 'マニューバー' , sub: 'スプラッシュシールド' , sp: 'イカスフィア' },
    { name: 'ケルビン525ベッチュー' , main: 'マニューバー' , sub: 'タンサンボム' , sp: 'インクアーマー' },
    { name: 'クアッドホッパーブラック' , main: 'マニューバー' , sub: 'ロボットボム' , sp: 'スーパーチャクチ' },
    { name: 'クアッドホッパーホワイト' , main: 'マニューバー' , sub: 'スプリンクラー' , sp: 'ボムピッチャー' },
    { name: 'パラシェルター' , main: 'シェルター' , sub: 'スプリンクラー' , sp: 'アメフラシ' },
    { name: 'パラシェルターソレーラ' , main: 'シェルター' , sub: 'ロボットボム' , sp: 'ボムピッチャー' },
    { name: 'キャンピングシェルター' , main: 'シェルター' , sub: 'ジャンプビーコン' , sp: 'バブルランチャー' },
    { name: 'キャンピングシェルターソレーラ' , main: 'シェルター' , sub: 'スプラッシュシールド' , sp: 'バブルランチャー' },
    { name: 'キャンピングシェルターカーモ' , main: 'シェルター' , sub: 'トラップ' , sp: 'ウルトラハンコ' },
    { name: 'スパイガジェット' , main: 'シェルター' , sub: 'トラップ' , sp: 'スーパーチャクチ' },
    { name: 'スパイガジェットソレーラ' , main: 'シェルター' , sub: 'スプラッシュボム' , sp: 'イカスフィア' },
    { name: 'スパイガジェットベッチュー' , main: 'シェルター' , sub: 'トーピード' , sp: 'インクアーマー' }
];

//ブキリストの複製
const weapons1 = weapons.slice();
const weapons2 = weapons.slice();
const weapons3 = weapons.slice();
const weapons4 = weapons.slice();
const objWeapons = ['',weapons1,weapons2,weapons3,weapons4];


//それぞれの履歴
const history1 = [];
const history2 = [];
const history3 = [];
const history4 = [];
const histories = ['',history1,history2,history3,history4]


//お題データ
const secondOdai ={
    'main-weapon': ['シューター','ローラー','チャージャー','マニューバー','スロッシャー','スピナー','シェルター','ブラスター','フデ'],
    'sub-weapon': ['スプラッシュボム','キューバンボム','クイックボム','スプリンクラー','ジャンプビーコン','スプラッシュシールド','ポイントセンサー','トラップ','カーリングボム','ロボットボム','ポイズンミスト','タンサンボム','トーピード'],
    'special-weapon': ['ジェットパック','スーパーチャクチ','マルチミサイル','ハイパープレッサー','アメフラシ','インクアーマー','イカスフィア','バブルランチャー','ナイスダマ','ウルトラハンコ','ボムピッチャー']
};




//お題選択分岐

function setSecondOptions (selectedFirst,second,added){
    const selectSecondOdai = document.getElementById(second);
    selectSecondOdai.disabled = false;

    secondOdai[selectedFirst].forEach((weapon,index) => {
        const option = document.createElement('option');
        option.className = added;
        option.value = secondOdai[selectedFirst][index];
        option.innerHTML = weapon;
        selectSecondOdai.appendChild(option);
    });
}

const clickOdai = document.getElementsByName('first-odai');


for(let i=0; i<clickOdai.length; i++){
    clickOdai[i].addEventListener('click', (e) =>{
        const odaiId = e.target.id;

        const firstSelect = document.getElementById(odaiId);
        firstSelect.addEventListener('change',(e) => {
            const added = 'added'+ odaiId;
            const addedOption = document.getElementsByClassName(added);
            while(addedOption.length){
                addedOption.item(0).remove();
            }
            setSecondOptions(e.target.value,'second-'+ odaiId,added);
        });
    })
}



//ルーレット処理


//お題が指定されたときに結果に出すブキを絞る処理
function filtering(i){
    var firstFilter = document.getElementById('odai' + i).value;
    var secondFilter = document.getElementById('second-odai' + i).value;
    if(firstFilter == 'main-weapon'){
        if(secondFilter == '未選択'){
            return objWeapons[i];
        }else{
            return objWeapons[i].filter(weapon => weapon.main == secondFilter);
        }
    }else if(firstFilter == 'sub-weapon'){
        if(secondFilter == '未選択'){
            return objWeapons[i];
        }else{
            return objWeapons[i].filter(weapon => weapon.sub == secondFilter);
        }
    }else if(firstFilter == 'special-weapon'){
        if(secondFilter == '未選択'){
            return objWeapons[i];
        }else{
            return objWeapons[i].filter(weapon => weapon.sp == secondFilter);
        }
    }else{
        return objWeapons[i];
    }
}

//ランダムでブキを出すルーレット本体
function roulette(filtered){
    var random = Math.floor( Math.random() * filtered.length);
    var result = filtered[random];
    return result;
}

//それぞれのブキリストから既出のブキを消す処理
function deleteList(result, j){
    let memorySet = document.getElementById('memory');
    if(memorySet.checked == true){
        for(let i = 0; i < objWeapons[j].length; i++){
             if(objWeapons[j][i].name === result.name){
                objWeapons[j].splice(i,1);
            }
        }
    }  
}

//チェックが外されたとき、それぞれのブキリストをリセットする処理
function unchecked(j){
    let memorySet = document.getElementById('memory');
    if(memorySet.checked == false){
        objWeapons[j] = weapons.slice();
    }
}



const start = document.getElementById('start-btn');

//ルーレット開始ボタンを押したときの処理
start.addEventListener('click', function(){
    const history = [''];
    //出せるブキがリストにあるか確認する
    for(j=1; j <= 4; j++){
        unchecked(j);
        let result = roulette(filtering(j),j);
        if(result == undefined){
            let error = document.getElementById('no-weapon');
            error.classList.add('block');
            return; //出せるブキがなければエラーメッセージを出して処理を終了
        }
    }
    //出せるブキがあればルーレット開始
    for(j=1; j <= 4; j++){
        document.getElementById('no-weapon').classList.remove('block'); //エラーメッセージが出ていれば消す
        let result = roulette(filtering(j),j); //ルーレットの結果
        deleteList(result, j); //それぞれのブキリストから出たブキを消す
        let box = document.getElementById('result'+ j);
        box.textContent = result.name; //結果をUIに表示
        history.push(result);
        histories[j].push(history[j]); //それぞれの履歴に結果を入れる
    }
});

