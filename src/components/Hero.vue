<template>
    <div class='hero'>
        <div class='hero-text'>
            <div class='inner'>
                <slot name="title"></slot>
                <slot name="subtitle"></slot>
                <slot name="disco-ball"></slot>
                <slot name="intro"></slot>
            </div>
        </div>
        <slot name="btn-links"></slot>
    </div>
</template>