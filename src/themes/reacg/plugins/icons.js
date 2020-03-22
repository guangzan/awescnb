import { sidebarWraps } from '@/constants/elements'
import { pageName, getRandomProperty } from '@/assets/utils/tools'
import { loadFiles, iconInSvg } from '../utils/tools'
import { CDN } from '../constants/urls'
import icons from '../constants/icons'

const userOptions = window.opts

// 设置sidebar icon
function setSidebarIcon() {
    // 小块标题
    if ($(sidebarWraps.news).length > 0) {
        $(`${sidebarWraps.news} h3`).prepend(iconInSvg(icons.news))
    }
    if ($(sidebarWraps.search).length > 1) {
        $(`${sidebarWraps.search} h3`).prepend(iconInSvg(icons.search))
    }
    if ($(sidebarWraps.links).length > 0) {
        $(`${sidebarWraps.links} h3`).prepend(iconInSvg(icons.links))
        $(`${sidebarWraps.links} ul li a`).prepend(iconInSvg(icons.link))
    }
    if ($(sidebarWraps.recent).length > 0) {
        $(`${sidebarWraps.recent} h3`).prepend(iconInSvg(icons.pens))
        $(`${sidebarWraps.recent} ul li a`).prepend(iconInSvg(icons.pen))
    }
    if ($(sidebarWraps.tags).length > 0) {
        $(`${sidebarWraps.tags} h3`).prepend(iconInSvg(icons.tags))
        $(`${sidebarWraps.tags} ul li a`).prepend(iconInSvg(icons.tag))
    }
    if ($(sidebarWraps.score).length > 0) {
        $(`${sidebarWraps.score} h3`).prepend(iconInSvg(icons.trending))
    }
    if ($(sidebarWraps.category).length > 0) {
        $(`${sidebarWraps.category} h3`).prepend(iconInSvg(icons.categories))
        $(`${sidebarWraps.category} ul li a`).prepend(iconInSvg(icons.category))
    }
    if ($(sidebarWraps.record).length > 0) {
        $(`${sidebarWraps.record} h3`).prepend(iconInSvg(icons.records))
        $(`${sidebarWraps.record} ul li a`).prepend(iconInSvg(icons.record))
    }
    if ($(sidebarWraps.recentComments).length > 0) {
        $(`${sidebarWraps.recentComments} h3`).prepend(
            iconInSvg(icons.comments),
        )
        $(`${sidebarWraps.recentComments} ul li a`).prepend(
            iconInSvg(icons.comment),
        )
    }
    if ($(sidebarWraps.topview).length > 0) {
        $(`${sidebarWraps.topview} h3`).prepend(iconInSvg(icons.trending))
        $(`${sidebarWraps.topview} ul li a`).prepend(iconInSvg(icons.view))
    }
    if ($(sidebarWraps.topComents).length > 0) {
        $(`${sidebarWraps.topComents} h3`).prepend(iconInSvg(icons.trending))
        $(`${sidebarWraps.topComents} ul li a`).prepend(
            iconInSvg(icons.comment),
        )
    }
    if ($(sidebarWraps.topDig).length > 0) {
        $(`${sidebarWraps.topDig} h3`).prepend(iconInSvg(icons.trending))
        $(`${sidebarWraps.topDig} ul li a`).prepend(iconInSvg(icons.dig))
    }
    if ($(sidebarWraps.catalog).length > 0) {
        $(`${sidebarWraps.catalog} h3`).prepend(iconInSvg(icons.catalog))
    }
}

// 设置github icon
function setGithub() {
    const options = userOptions.github
    if (!options.enable) return
    const $githubIcon = `<a href=${options.url}>${iconInSvg(icons.github)}</a>`
    $('#navigator').prepend($githubIcon)
    $('#navigator .icon').css({ color: `${options.color}` })
}

// 首页文章题目 icon
function setIndexPosttitleIcon() {
    if (pageName() !== 'index') return
    $('.postTitle').each(function() {
        $(this).prepend(iconInSvg(icons.pen))
    })
}

// 设置首页列表查看更多按钮
function setIndexPostLookIcon() {
    if (pageName() !== 'index') return
    if ($('.day').length < 1) return
    $('.c_b_p_desc_readmore').each(function() {
        $(this).append(iconInSvg(icons.look))
    })
}

// 随笔分类页、随笔档案页题目icon
function setEntrylistPosttitleIcon() {
    if (pageName() !== 'list') return
    $('.entrylistPosttitle').each(function() {
        $(this).prepend(iconInSvg(icons.pen))
    })
}

// 设置随笔页文章题目icon
function setHeadlineIcon() {
    if (pageName() !== 'post') return
    $('#topics .postTitle').prepend(iconInSvg(icons.pen))
}

// 文章标题icon
function setPostTitleIcon() {
    if (pageName() !== 'post') return
    const $h1 = $('#cnblogs_post_body:first>h1')
    const $h2 = $('#cnblogs_post_body:first>h2')
    const $title = $h1.length === 0 ? $h2 : $h1
    $($title).each(function() {
        const randomIconName = getRandomProperty(icons.food)
        const icon = icons.food[randomIconName]
        $(this).prepend(iconInSvg(icon))
    })
}

// 调用
function build() {
    setSidebarIcon()
    setGithub()
    setIndexPosttitleIcon()
    setIndexPostLookIcon()
    setEntrylistPosttitleIcon()
    setHeadlineIcon()
    setPostTitleIcon()
}

// 加载i confont js
function setIcons() {
    loadFiles(
        [
            {
                name: CDN.icon,
                type: 'jsCDN',
            },
        ],
        build,
    )
}

// -------- icon end ----
export default setIcons